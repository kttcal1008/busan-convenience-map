// Vercel serverless function. Keep the Kakao REST key in Vercel environment variables.
export default async function handler(request, response) {
  const key = process.env.KAKAO_REST_API_KEY;
  if (!key) return response.status(503).json({ error: 'KAKAO_REST_API_KEY 환경변수가 설정되지 않았습니다.' });
  const documents = [];
  let meta = {};

  for (let page = 1; page <= 3; page += 1) {
    const url = new URL('https://dapi.kakao.com/v2/local/search/keyword.json');
    for (const name of ['query', 'x', 'y', 'radius']) {
      if (request.query[name]) url.searchParams.set(name, request.query[name]);
    }
    url.searchParams.set('size', '15');
    url.searchParams.set('page', String(page));

    const result = await fetch(url, { headers: { Authorization: `KakaoAK ${key}` } });
    const body = await result.json();
    if (!result.ok) return response.status(result.status).json(body);

    documents.push(...(body.documents || []));
    meta = body.meta || {};
    if (meta.is_end) break;
  }

  const uniqueDocuments = Array.from(
    new Map(documents.map((place) => [place.id || `${place.x}:${place.y}:${place.place_name}`, place])).values()
  );

  return response.status(200).json({
    documents: uniqueDocuments,
    meta: { ...meta, pageable_count: uniqueDocuments.length }
  });
}
