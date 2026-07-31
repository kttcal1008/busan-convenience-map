// Vercel serverless function. Keep the Kakao REST key in Vercel environment variables.
export default async function handler(request, response) {
  const key = process.env.KAKAO_REST_API_KEY;
  if (!key) return response.status(503).json({ error: 'KAKAO_REST_API_KEY 환경변수가 설정되지 않았습니다.' });
  const query = String(request.query.query || '').trim();
  const touristSearch = query === '관광명소';
  const originX = Number(request.query.x);
  const originY = Number(request.query.y);
  const requestedRadius = Math.min(5000, Math.max(100, Number(request.query.radius) || 3000));
  if (!query || !Number.isFinite(originX) || !Number.isFinite(originY)) {
    return response.status(400).json({ error: '검색어와 기준 위치가 필요합니다.' });
  }

  const offset = requestedRadius * 0.6;
  const cellRadius = Math.ceil(requestedRadius * 0.9);
  const metersPerLngDegree = 111320 * Math.cos(originY * Math.PI / 180);
  const offsets = [-offset, 0, offset];
  const centers = offsets.flatMap((north) =>
    offsets.map((east) => ({
      x: originX + east / metersPerLngDegree,
      y: originY + north / 111320
    }))
  );

  async function searchCell(center) {
    const places = [];
    for (let page = 1; page <= 3; page += 1) {
      const url = new URL(touristSearch
        ? 'https://dapi.kakao.com/v2/local/search/category.json'
        : 'https://dapi.kakao.com/v2/local/search/keyword.json');
      if (touristSearch) url.searchParams.set('category_group_code', 'AT4');
      else url.searchParams.set('query', query);
      url.searchParams.set('x', String(center.x));
      url.searchParams.set('y', String(center.y));
      url.searchParams.set('radius', String(cellRadius));
      url.searchParams.set('sort', 'distance');
      url.searchParams.set('size', '15');
      url.searchParams.set('page', String(page));

      const result = await fetch(url, { headers: { Authorization: `KakaoAK ${key}` } });
      const body = await result.json();
      if (!result.ok) throw { status: result.status, body };
      places.push(...(body.documents || []));
      if (body.meta?.is_end) break;
    }
    return places;
  }

  try {
    const documents = (await Promise.all(centers.map(searchCell))).flat();
    const uniqueDocuments = Array.from(
      new Map(documents.map((place) => [place.id || `${place.x}:${place.y}:${place.place_name}`, place])).values()
    );

    const toRadians = (degrees) => degrees * Math.PI / 180;
    const distanceFromOrigin = (place) => {
      const lat = Number(place.y);
      const lng = Number(place.x);
      const dLat = toRadians(lat - originY);
      const dLng = toRadians(lng - originX);
      const a = Math.sin(dLat / 2) ** 2
        + Math.cos(toRadians(originY)) * Math.cos(toRadians(lat)) * Math.sin(dLng / 2) ** 2;
      return 6371000 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    };

    const insideRadius = uniqueDocuments
      .map((place) => ({ place, distance: distanceFromOrigin(place) }))
      .filter(({ distance }) => distance <= requestedRadius)
      .sort((a, b) => a.distance - b.distance)
      .map(({ place, distance }) => ({ ...place, distance: String(Math.round(distance)) }));

    return response.status(200).json({
      documents: insideRadius,
      meta: { is_end: true, pageable_count: insideRadius.length, total_count: insideRadius.length }
    });
  } catch (error) {
    return response.status(error.status || 502).json(error.body || { error: '카카오 장소 검색에 실패했습니다.' });
  }
}
