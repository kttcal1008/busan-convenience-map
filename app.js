const $ = (selector) => document.querySelector(selector);
const map = L.map('map').setView([35.1796, 129.0756], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

const strings = {
  ko: {
    brand: '부산 <b>편의지도</b>', placeholder: '카페, 화장실, 주차장 등 장소를 검색하세요', search: '검색',
    tag: '부산 생활편의 맞춤 지도', hero: '지금 필요한 곳을<br>10초 안에 찾으세요',
    sub: '맛집 순위보다 내 상황에 맞는 화장실·주차장·약국·반려동물 동반 장소를 빠르게 찾아드려요.',
    quickTitle: '지금 필요한 곳 빠르게 찾기', quickHint: '버튼을 누르면 선택한 반경에서 바로 검색합니다.',
    essentialTitle: '생활 필수', essentialHint: '화장실·주차장·약국처럼 급할 때 필요한 시설',
    lifestyleTitle: '상황 맞춤', lifestyleHint: '반려견 동반과 늦은 시간에 맞는 장소',
    tourTitle: '여행·관광', tourHint: '현재 위치에서 가까운 부산 대표 명소',
    locate: '⌖ 내 위치 정보 찾기', initial: '위치를 찾은 뒤 검색어를 입력해 주세요.',
    recommendTitle: '지금 가장 가까운 추천', recommendBadge: '거리 기준 TOP 3', touristRecommendTitle: '근처 대표 관광지 추천', touristRecommendBadge: '부산 명소 TOP 3',
    infoSmall: '장소 검색', infoTitle: '검색 결과를 선택해 주세요', infoText: '위치 확인 후 원하는 시설을 검색하세요.',
    reviewTitle: '이 장소 리뷰', name: '이름', namePlaceholder: '리뷰에 표시할 이름', rating: '별점',
    reviewPlaceholder: '이 장소에 대한 리뷰를 남겨주세요.', reviewSave: '리뷰 저장',
    reviewNote: '작성한 리뷰는 현재 사용 중인 기기에 저장됩니다.', resultsTitle: '검색한 주변 시설',
    resultsEmpty: '검색 결과가 여기에 표시됩니다.', mapTitle: '📍 부산 편의시설 지도', radiusTitle: '검색 반경',
    radiusDescription: '선택한 거리 전체에서 시설을 찾습니다.', routeTitle: '장소를 선택해 주세요',
    routeInitial: '검색 결과의 핀을 누르면 길찾기를 이용할 수 있습니다.',
    walk: '도보', traffic: '대중교통', car: '자동차', routeButton: '카카오맵에서 {mode} 길찾기',
    radiusNote: '파란 원은 {radius}km 검색 범위입니다', radiusButton: '{radius}km 이내',
    required: '장소 또는 시설명을 입력해 주세요.', searching: '카카오에서 {radius}km 반경 전체를 검색하고 있어요…',
    searchFail: '카카오 장소 검색에 실패했습니다.', success: '{origin} {radius}km 안의 카카오 장소 {count}곳을 표시했습니다.',
    myLocation: '내 위치', busanCenter: '부산 중심', placeInfo: '카카오 제공 장소 정보',
    noAddress: '주소 정보 없음', walkingTime: '{distance} · 도보 약 {minutes}분', categoryLabel: '분류',
    addressLabel: '주소', phoneLabel: '전화', noPhone: '전화번호 정보 없음', detailButton: '📷 사진·운영시간·메뉴 자세히 보기',
    roadviewButton: '🛣️ 거리로 보기', roadviewEyebrow: '카카오 로드뷰', roadviewTitle: '거리에서 보는 {place}',
    roadviewClose: '로드뷰 닫기', roadviewLoading: '가장 가까운 로드뷰를 찾고 있어요…',
    roadviewUnavailable: '이 장소 주변에는 로드뷰가 없습니다.', roadviewConfig: '로드뷰 연결을 준비 중입니다. 잠시 후 다시 시도해 주세요.',
    roadviewError: '로드뷰를 불러오지 못했습니다.', roadviewNotice: '장소와 가장 가까운 촬영 지점을 표시합니다.',
    routeFrom: '{origin}에서 {distance} · {mode} 경로를 확인합니다.', noResults: '검색 결과가 없습니다.',
    more: '더보기 ({count}곳)', collapse: '접기', recommended: '추천 · ', fit: '거리 적합 {score}',
    noReviews: '아직 작성된 리뷰가 없습니다.', anonymous: '익명', unsupported: '이 브라우저는 위치 기능을 지원하지 않습니다.',
    locating: '위치 권한을 요청하고 있어요…', located: '● 현재 위치 확인됨 · 정확도 약 {accuracy}m',
    permission: '위치 권한을 허용해 주세요. 주소 표시줄의 위치 권한을 확인하세요.',
    selectFirst: '먼저 장소를 검색하고 핀을 선택해 주세요.', locateFirst: '내 위치 정보 찾기 후 길찾기를 이용해 주세요.',
    quick: {
      pet: ['반려견과 외출', '애견동반 카페'], toilet: ['급한 화장실', '가까운 공중화장실'],
      parking: ['주차 먼저', '주변 공영주차장'], pharmacy: ['약이 필요할 때', '가까운 약국'],
      night: ['늦은 시간', '24시 편의점'], tour: ['근처 관광지 추천!', '주변 관광명소']
    }
  },
  en: {
    brand: 'Busan <b>Convenience Map</b>', placeholder: 'Search cafés, restrooms, parking and more', search: 'Search',
    tag: 'Busan local convenience guide', hero: 'Find what you need<br>in just 10 seconds',
    sub: 'Quickly find restrooms, parking, pharmacies, pet-friendly places and other facilities that fit your situation.',
    quickTitle: 'Find what you need now', quickHint: 'Tap an option to search the selected radius right away.',
    essentialTitle: 'Everyday essentials', essentialHint: 'Restrooms, parking and pharmacies when you need them',
    lifestyleTitle: 'Lifestyle', lifestyleHint: 'Pet-friendly places and late-night essentials',
    tourTitle: 'Travel & sightseeing', tourHint: 'Popular Busan attractions near your current location',
    locate: '⌖ Use my location', initial: 'Set your location, then choose or enter a search.',
    recommendTitle: 'Closest recommendations', recommendBadge: 'DISTANCE TOP 3', touristRecommendTitle: 'Top attractions nearby', touristRecommendBadge: 'BUSAN HIGHLIGHTS',
    infoSmall: 'Place search', infoTitle: 'Choose a search result', infoText: 'Search for a facility and select a place.',
    reviewTitle: 'Reviews for this place', name: 'Name', namePlaceholder: 'Name shown with your review', rating: 'Rating',
    reviewPlaceholder: 'Write a review for this place.', reviewSave: 'Save review',
    reviewNote: 'Reviews are saved on this device.', resultsTitle: 'Facilities found nearby',
    resultsEmpty: 'Search results will appear here.', mapTitle: '📍 Busan Convenience Map', radiusTitle: 'Search radius',
    radiusDescription: 'Find facilities throughout the selected radius.', routeTitle: 'Choose a place',
    routeInitial: 'Select a map pin to get directions.', walk: 'Walking', traffic: 'Transit', car: 'Driving',
    routeButton: 'Directions in KakaoMap · {mode}', radiusNote: 'The blue circle is the {radius}km search area',
    radiusButton: 'Within {radius}km', required: 'Enter a place or facility.', searching: 'Searching the full {radius}km radius…',
    searchFail: 'Kakao place search failed.', success: 'Showing {count} places within {radius}km of {origin}.',
    myLocation: 'your location', busanCenter: 'central Busan', placeInfo: 'Place information from Kakao',
    noAddress: 'Address unavailable', walkingTime: '{distance} · about {minutes} min walk', categoryLabel: 'Category',
    addressLabel: 'Address', phoneLabel: 'Phone', noPhone: 'Phone number unavailable', detailButton: '📷 View photos, hours, menus and details',
    roadviewButton: '🛣️ Street view', roadviewEyebrow: 'Kakao Roadview', roadviewTitle: 'Street view near {place}',
    roadviewClose: 'Close street view', roadviewLoading: 'Finding the closest street view…',
    roadviewUnavailable: 'No street view is available near this place.', roadviewConfig: 'Street view is being connected. Please try again shortly.',
    roadviewError: 'Could not load street view.', roadviewNotice: 'Shows the closest available photographed location.',
    routeFrom: 'Check the {mode} route from {origin} · {distance}.', noResults: 'No results found.',
    more: 'Show more ({count})', collapse: 'Show less', recommended: 'Recommended · ', fit: 'Distance fit {score}',
    noReviews: 'No reviews yet.', anonymous: 'Anonymous', unsupported: 'Location is not supported by this browser.',
    locating: 'Requesting location permission…', located: '● Location found · accuracy about {accuracy}m',
    permission: 'Allow location access in your browser settings.', selectFirst: 'Search and select a map pin first.',
    locateFirst: 'Use your location before requesting directions.',
    quick: {
      pet: ['Going out with a pet', 'Pet-friendly cafés'], toilet: ['Need a restroom', 'Public restrooms nearby'],
      parking: ['Find parking first', 'Public parking nearby'], pharmacy: ['Need medicine', 'Pharmacies nearby'],
      night: ['Open late', '24-hour convenience stores'], tour: ['Nearby attractions!', 'Tourist spots around you']
    }
  },
  ja: {
    brand: '釜山 <b>便利マップ</b>', placeholder: 'カフェ・トイレ・駐車場などを検索', search: '検索',
    tag: '釜山の生活便利ガイド', hero: '今必要な場所を<br>10秒で見つけよう',
    sub: 'トイレ、駐車場、薬局、ペット同伴施設など、状況に合う場所をすぐに探せます。',
    quickTitle: '今必要な場所をすぐ検索', quickHint: '項目をタップすると、選択した範囲ですぐに検索します。',
    essentialTitle: '生活に必要', essentialHint: 'トイレ・駐車場・薬局など、急な時に役立つ施設',
    lifestyleTitle: 'シーン別', lifestyleHint: 'ペット同伴や深夜利用に合う場所',
    tourTitle: '旅行・観光', tourHint: '現在地の近くにある釜山の観光スポット',
    locate: '⌖ 現在地を取得', initial: '現在地を設定して検索してください。',
    recommendTitle: '今一番近いおすすめ', recommendBadge: '距離 TOP 3', touristRecommendTitle: '近くの代表観光地', touristRecommendBadge: '釜山名所 TOP 3',
    infoSmall: '場所検索', infoTitle: '検索結果を選択', infoText: '施設を検索して場所を選んでください。',
    reviewTitle: 'この場所のレビュー', name: '名前', namePlaceholder: 'レビューに表示する名前', rating: '評価',
    reviewPlaceholder: 'この場所のレビューを書いてください。', reviewSave: 'レビューを保存',
    reviewNote: 'レビューはこの端末に保存されます。', resultsTitle: '周辺の検索結果',
    resultsEmpty: '検索結果がここに表示されます。', mapTitle: '📍 釜山便利マップ', radiusTitle: '検索範囲',
    radiusDescription: '選択した範囲全体から施設を探します。', routeTitle: '場所を選択してください',
    routeInitial: '地図のピンを選ぶとルートを確認できます。', walk: '徒歩', traffic: '公共交通', car: '車',
    routeButton: 'KakaoMapで{mode}ルート', radiusNote: '青い円は{radius}kmの検索範囲です',
    radiusButton: '{radius}km以内', required: '場所または施設名を入力してください。',
    searching: '{radius}km圏内を検索しています…', searchFail: '場所検索に失敗しました。',
    success: '{origin}から{radius}km以内の{count}件を表示しています。', myLocation: '現在地', busanCenter: '釜山中心部',
    placeInfo: 'Kakao提供の場所情報', noAddress: '住所情報なし', walkingTime: '{distance} · 徒歩約{minutes}分',
    categoryLabel: 'カテゴリー', addressLabel: '住所', phoneLabel: '電話', noPhone: '電話番号情報なし',
    detailButton: '📷 写真・営業時間・メニューを見る',
    roadviewButton: '🛣️ ストリートビュー', roadviewEyebrow: 'Kakaoロードビュー', roadviewTitle: '{place}周辺のストリートビュー',
    roadviewClose: 'ストリートビューを閉じる', roadviewLoading: '最も近いストリートビューを探しています…',
    roadviewUnavailable: 'この場所の周辺にはストリートビューがありません。', roadviewConfig: 'ストリートビューを準備中です。しばらくしてからお試しください。',
    roadviewError: 'ストリートビューを読み込めませんでした。', roadviewNotice: '場所に最も近い撮影地点を表示します。',
    routeFrom: '{origin}から{distance} · {mode}ルートを確認します。', noResults: '検索結果がありません。',
    more: 'もっと見る（{count}件）', collapse: '閉じる', recommended: 'おすすめ · ', fit: '距離適合 {score}',
    noReviews: 'まだレビューがありません。', anonymous: '匿名', unsupported: 'このブラウザは位置情報に対応していません。',
    locating: '位置情報の許可を求めています…', located: '● 現在地を確認 · 精度約{accuracy}m',
    permission: 'ブラウザで位置情報を許可してください。', selectFirst: '場所を検索してピンを選択してください。',
    locateFirst: '現在地を取得してからルートをご利用ください。',
    quick: {
      pet: ['ペットとお出かけ', 'ペット同伴カフェ'], toilet: ['トイレを探す', '近くの公衆トイレ'],
      parking: ['駐車場を探す', '近くの公共駐車場'], pharmacy: ['薬が必要', '近くの薬局'],
      night: ['夜遅く', '24時間コンビニ'], tour: ['近くの観光地！', '周辺の観光スポット']
    }
  },
  zh: {
    brand: '釜山<b>便利地图</b>', placeholder: '搜索咖啡厅、洗手间、停车场等', search: '搜索',
    tag: '釜山生活便利指南', hero: '10秒找到<br>现在需要的地方',
    sub: '快速查找适合您的洗手间、停车场、药店、宠物友好场所及其他便利设施。',
    quickTitle: '快速查找现在需要的地点', quickHint: '点击选项即可在所选范围内立即搜索。',
    essentialTitle: '生活必需', essentialHint: '洗手间、停车场、药店等应急设施',
    lifestyleTitle: '场景需求', lifestyleHint: '适合携带宠物或深夜使用的地点',
    tourTitle: '旅行与观光', tourHint: '当前位置附近的釜山热门景点',
    locate: '⌖ 获取我的位置', initial: '请先设置位置，然后选择或输入搜索内容。',
    recommendTitle: '距离最近的推荐', recommendBadge: '距离 TOP 3', touristRecommendTitle: '附近代表景点推荐', touristRecommendBadge: '釜山景点 TOP 3',
    infoSmall: '地点搜索', infoTitle: '请选择搜索结果', infoText: '搜索设施并选择地点。',
    reviewTitle: '该地点的评论', name: '姓名', namePlaceholder: '评论中显示的姓名', rating: '评分',
    reviewPlaceholder: '请为该地点撰写评论。', reviewSave: '保存评论',
    reviewNote: '评论将保存在当前设备上。', resultsTitle: '附近搜索结果',
    resultsEmpty: '搜索结果将在这里显示。', mapTitle: '📍 釜山便利地图', radiusTitle: '搜索范围',
    radiusDescription: '查找所选范围内的全部设施。', routeTitle: '请选择地点',
    routeInitial: '选择地图标记即可查看路线。', walk: '步行', traffic: '公共交通', car: '驾车',
    routeButton: '在KakaoMap查看{mode}路线', radiusNote: '蓝色圆圈为{radius}公里搜索范围',
    radiusButton: '{radius}公里内', required: '请输入地点或设施名称。',
    searching: '正在搜索{radius}公里范围…', searchFail: 'Kakao地点搜索失败。',
    success: '显示{origin}{radius}公里内的{count}个地点。', myLocation: '当前位置', busanCenter: '釜山市中心',
    placeInfo: 'Kakao提供的地点信息', noAddress: '暂无地址', walkingTime: '{distance} · 步行约{minutes}分钟',
    categoryLabel: '分类', addressLabel: '地址', phoneLabel: '电话', noPhone: '暂无电话号码',
    detailButton: '📷 查看照片、营业时间、菜单和详情',
    roadviewButton: '🛣️ 街景查看', roadviewEyebrow: 'Kakao街景', roadviewTitle: '{place}附近的街景',
    roadviewClose: '关闭街景', roadviewLoading: '正在查找最近的街景…',
    roadviewUnavailable: '该地点附近暂无街景。', roadviewConfig: '街景正在连接，请稍后再试。',
    roadviewError: '无法加载街景。', roadviewNotice: '显示距离该地点最近的拍摄位置。',
    routeFrom: '从{origin}查看{distance}的{mode}路线。', noResults: '未找到结果。',
    more: '查看更多（{count}个）', collapse: '收起', recommended: '推荐 · ', fit: '距离匹配 {score}',
    noReviews: '暂无评论。', anonymous: '匿名', unsupported: '此浏览器不支持定位。',
    locating: '正在请求位置权限…', located: '● 已找到位置 · 精度约{accuracy}米',
    permission: '请在浏览器设置中允许位置权限。', selectFirst: '请先搜索并选择地图标记。',
    locateFirst: '请先获取当前位置再查看路线。',
    quick: {
      pet: ['和宠物一起外出', '宠物友好咖啡厅'], toilet: ['寻找洗手间', '附近公共洗手间'],
      parking: ['先找停车场', '附近公共停车场'], pharmacy: ['需要药品', '附近药店'],
      night: ['深夜使用', '24小时便利店'], tour: ['推荐附近景点！', '周边旅游景点']
    }
  }
};

let language = localStorage.getItem('busan-map-language') || (navigator.language || 'ko').slice(0, 2);
if (!strings[language]) language = 'ko';
let pos = null;
let userMarker = null;
let selected = null;
let radius = 3;
let routeMode = 'walk';
let expanded = false;
let allResults = [];
let lastQuery = '';
let markers = L.layerGroup().addTo(map);
let markerByPlaceKey = new Map();
let circle = null;
let roadviewSdkPromise = null;
let roadviewInstance = null;
let roadviewReturnFocus = null;
const featuredTouristNames = [
  '해운대해수욕장', '광안리해수욕장', '감천문화마을', '태종대', '부산타워', '용두산공원',
  '자갈치시장', '국제시장', '송도해수욕장', '흰여울문화마을', '오륙도스카이워크',
  '동백섬', '더베이101', '해동용궁사', '송정해수욕장', '청사포다릿돌전망대',
  '부산시민공원', '유엔기념공원', '범어사', '다대포해수욕장', '영화의전당',
  '168계단', '초량이바구길', '차이나타운', '송상현광장', '황령산', '전포카페거리',
  '부산박물관', '국립해양박물관', '아미산전망대', '을숙도', '아홉산숲', '금정산성'
];

const t = (key, values = {}) => {
  let value = strings[language][key] ?? strings.ko[key] ?? key;
  Object.entries(values).forEach(([name, replacement]) => {
    value = value.replaceAll(`{${name}}`, replacement);
  });
  return value;
};
const fmt = (km) => km < 1 ? `${Math.round(km * 1000)}m` : `${km.toFixed(1)}km`;
const distance = (place) => map.distance(
  [pos?.lat ?? 35.1796, pos?.lng ?? 129.0756],
  [place.lat, place.lng]
) / 1000;
const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));
const normalizedPlaceName = (name) => String(name || '').replace(/[\s·\-()]/g, '').toLowerCase();
const placeKey = (place) => String(place?.id || `${place?.lat},${place?.lng}`);
const isSelectedPlace = (place) => Boolean(selected) && placeKey(place) === placeKey(selected);
const featuredTouristGroup = (place) => featuredTouristNames.find((name) =>
  normalizedPlaceName(place.name).includes(normalizedPlaceName(name))
) || '';

function markerIcon(place, recommended = false, isSelected = false) {
  const category = place.category || '';
  const emoji = category.includes('관광명소') ? '📸' : category.includes('카페') ? '☕' : '📍';
  return L.divIcon({
    className: '',
    html: `<div class="facility${recommended ? ' recommended' : ''}${isSelected ? ' selected' : ''}"><span>${emoji}</span></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34]
  });
}

function showStatus(message, ok = false) {
  $('#status').textContent = message;
  $('#status').className = `status${ok ? ' ok' : ''}`;
}

function drawRadius() {
  if (circle) map.removeLayer(circle);
  const origin = pos || { lat: 35.1796, lng: 129.0756 };
  circle = L.circle([origin.lat, origin.lng], {
    radius: radius * 1000,
    color: '#1769e0',
    weight: 2,
    fillColor: '#1769e0',
    fillOpacity: .05,
    interactive: false
  }).addTo(map);
  $('#mapNote').textContent = t('radiusNote', { radius });
}

function reviewKey(place) {
  return `place-reviews:${place.id || `${place.lat},${place.lng}`}`;
}

function readReviews(place) {
  try {
    return JSON.parse(localStorage.getItem(reviewKey(place)) || '[]');
  } catch {
    return [];
  }
}

function renderReviews(place) {
  const box = $('#reviewBox');
  const reviews = readReviews(place);
  box.hidden = false;
  $('#reviewList').innerHTML = reviews.length
    ? reviews.map((review) => `<article><strong>${escape(review.name || t('anonymous'))}</strong><b>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</b><p>${escape(review.text)}</p><small>${escape(review.date)}</small></article>`).join('')
    : `<p class="empty-review">${t('noReviews')}</p>`;
}

function modeLabel(mode = routeMode) {
  return t(mode === 'walk' ? 'walk' : mode === 'traffic' ? 'traffic' : 'car');
}

async function ensureRoadviewSdk() {
  if (window.kakao?.maps?.Roadview) return window.kakao.maps;
  if (roadviewSdkPromise) return roadviewSdkPromise;

  roadviewSdkPromise = (async () => {
    const response = await fetch('/api/runtime-config');
    const config = await response.json();
    if (!response.ok || !config.kakaoJsKey) throw new Error('ROADVIEW_CONFIG');

    await new Promise((resolve, reject) => {
      const existing = document.querySelector('script[data-kakao-roadview]');
      const onReady = () => {
        if (!window.kakao?.maps?.load) return reject(new Error('ROADVIEW_LOAD'));
        window.kakao.maps.load(resolve);
      };
      if (existing) {
        if (window.kakao?.maps?.load) onReady();
        else {
          existing.addEventListener('load', onReady, { once: true });
          existing.addEventListener('error', () => reject(new Error('ROADVIEW_LOAD')), { once: true });
        }
        return;
      }

      const script = document.createElement('script');
      script.dataset.kakaoRoadview = 'true';
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(config.kakaoJsKey)}&autoload=false`;
      script.onload = onReady;
      script.onerror = () => reject(new Error('ROADVIEW_LOAD'));
      document.head.appendChild(script);
    });
    return window.kakao.maps;
  })().catch((error) => {
    roadviewSdkPromise = null;
    throw error;
  });

  return roadviewSdkPromise;
}

function nearestRoadviewPano(client, position, radii = [50, 150, 300]) {
  return new Promise((resolve) => {
    const check = (index) => {
      client.getNearestPanoId(position, radii[index], (panoId) => {
        if (panoId || index === radii.length - 1) resolve(panoId || null);
        else check(index + 1);
      });
    };
    check(0);
  });
}

function closeRoadview() {
  const modal = $('#roadviewModal');
  modal.hidden = true;
  document.body.classList.remove('modal-open');
  $('#roadviewCanvas').replaceChildren();
  roadviewInstance = null;
  roadviewReturnFocus?.focus?.();
}

async function openRoadview() {
  if (!selected) return;
  const place = selected;
  const modal = $('#roadviewModal');
  const canvas = $('#roadviewCanvas');
  const status = $('#roadviewStatus');
  roadviewReturnFocus = document.activeElement;
  $('#roadviewHeading').textContent = t('roadviewTitle', { place: place.name });
  $('#roadviewEyebrow').textContent = t('roadviewEyebrow');
  $('#roadviewNotice').textContent = t('roadviewNotice');
  $('#roadviewClose').setAttribute('aria-label', t('roadviewClose'));
  status.textContent = t('roadviewLoading');
  status.hidden = false;
  canvas.hidden = true;
  canvas.replaceChildren();
  modal.hidden = false;
  document.body.classList.add('modal-open');
  $('#roadviewClose').focus();

  try {
    const kakaoMaps = await ensureRoadviewSdk();
    if (modal.hidden || selected !== place) return;
    const position = new kakaoMaps.LatLng(place.lat, place.lng);
    const client = new kakaoMaps.RoadviewClient();
    const panoId = await nearestRoadviewPano(client, position);
    if (modal.hidden || selected !== place) return;
    if (!panoId) {
      status.textContent = t('roadviewUnavailable');
      return;
    }
    canvas.hidden = false;
    status.hidden = true;
    roadviewInstance = new kakaoMaps.Roadview(canvas);
    roadviewInstance.setPanoId(panoId, position);
  } catch (error) {
    status.textContent = t(error.message === 'ROADVIEW_CONFIG' ? 'roadviewConfig' : 'roadviewError');
  }
}

function collapsedResultPlaces() {
  const firstPlaces = allResults.slice(0, 4);
  if (!selected || firstPlaces.some(isSelectedPlace)) return firstPlaces;
  const selectedResult = allResults.find(isSelectedPlace);
  return selectedResult ? [...allResults.slice(0, 3), selectedResult] : firstPlaces;
}

function visibleResultPlaces() {
  return expanded ? allResults : collapsedResultPlaces();
}

function renderResultList() {
  const shown = visibleResultPlaces();
  $('#results').classList.toggle('expanded', expanded);
  $('#results').innerHTML = shown.length
    ? shown.map((place) => {
      const current = isSelectedPlace(place);
      return `<li><button data-place-key="${escape(placeKey(place))}"${current ? ' class="is-selected" aria-current="true"' : ''}><b>📍 ${escape(place.name)}</b><b>${fmt(distance(place))}</b><small>${escape(place.category || t('infoSmall'))} · ${escape(place.address)}</small></button></li>`;
    }).join('')
    : `<li>${t('noResults')}</li>`;
  document.querySelectorAll('#results [data-place-key]').forEach((button) => {
    button.onclick = () => {
      const place = allResults.find((item) => placeKey(item) === button.dataset.placeKey);
      if (place) choose(place);
    };
  });
}

function syncSelectionUi(ensureVisible = false) {
  const currentKey = selected ? placeKey(selected) : '';
  let resultButtons = Array.from(document.querySelectorAll('#results [data-place-key]'));
  if (ensureVisible && currentKey && !resultButtons.some((button) => button.dataset.placeKey === currentKey)) {
    renderResultList();
    resultButtons = Array.from(document.querySelectorAll('#results [data-place-key]'));
  }
  resultButtons.forEach((button) => {
    const current = button.dataset.placeKey === currentKey;
    button.classList.toggle('is-selected', current);
    if (current) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  });
  markerByPlaceKey.forEach(({ marker, place, recommended }) => {
    const current = isSelectedPlace(place);
    marker.setIcon(markerIcon(place, recommended, current));
    marker.setZIndexOffset(current ? 1000 : recommended ? 500 : 0);
  });
  const selectedButton = resultButtons.find((button) => button.dataset.placeKey === currentKey);
  if (ensureVisible && selectedButton && !window.matchMedia('(max-width: 720px)').matches) {
    selectedButton.scrollIntoView({ block: 'nearest' });
  }
}

function choose(place, focus = true, revealOnMobile = false) {
  selected = place;
  syncSelectionUi(true);
  const km = distance(place);
  const minutes = Math.max(1, Math.round(km * 12));
  const detailUrl = escape((place.url || '').replace(/^http:/, 'https:'));
  const phone = place.phone
    ? `<a href="tel:${escape(place.phone)}">${escape(place.phone)}</a>`
    : `<span>${t('noPhone')}</span>`;
  $('#info').innerHTML = `<small>${t('placeInfo')}</small><h2>📍 ${escape(place.name)}</h2><p class="walking-summary"><b>${t('walkingTime', { distance: fmt(km), minutes })}</b></p><dl class="place-details"><div><dt>${t('categoryLabel')}</dt><dd>${escape(place.category || t('infoSmall'))}</dd></div><div><dt>${t('addressLabel')}</dt><dd>${escape(place.address)}</dd></div><div><dt>${t('phoneLabel')}</dt><dd>${phone}</dd></div></dl><div class="place-actions"><button id="roadviewButton" class="place-roadview-button" type="button">${t('roadviewButton')}</button>${detailUrl ? `<a class="place-detail-button" href="${detailUrl}" target="_blank" rel="noopener">${t('detailButton')}</a>` : ''}</div>`;
  $('#roadviewButton').onclick = openRoadview;
  $('#routeTitle').textContent = place.name;
  $('#routeText').textContent = t('routeFrom', {
    origin: pos ? t('myLocation') : t('busanCenter'),
    distance: fmt(km),
    mode: modeLabel()
  });
  $('#routeButton').textContent = t('routeButton', { mode: modeLabel() });
  renderReviews(place);
  if (focus) map.setView([place.lat, place.lng], 17);
  if (revealOnMobile && window.matchMedia('(max-width: 720px)').matches) {
    requestAnimationFrame(() => $('#info').scrollIntoView({ behavior: 'smooth', block: 'start' }));
  }
}

function recommendationPlaces() {
  const touristMode = lastQuery === '관광명소';
  const top = [];
  const usedTouristGroups = new Set();
  for (const place of allResults) {
    const group = touristMode ? featuredTouristGroup(place) || normalizedPlaceName(place.name) : '';
    if (touristMode && usedTouristGroups.has(group)) continue;
    if (touristMode) usedTouristGroups.add(group);
    top.push(place);
    if (top.length === 3) break;
  }
  return top;
}

function renderRecommendations() {
  const section = $('#recommendations');
  const touristMode = lastQuery === '관광명소';
  const top = recommendationPlaces();
  $('#recommendTitle').textContent = touristMode ? t('touristRecommendTitle') : t('recommendTitle');
  $('#recommendBadge').textContent = touristMode ? t('touristRecommendBadge') : t('recommendBadge');
  section.hidden = !top.length;
  $('#recommendationList').innerHTML = top.map((place, index) => {
    const score = Math.max(1, Math.round(100 - distance(place) / radius * 100));
    const category = (place.category || t('infoSmall')).split('>').pop().trim();
    return `<button data-rec="${index}"><span class="rank">${index + 1}</span><span><b>${escape(place.name)}</b><small>${escape(category)} · ${fmt(distance(place))}</small></span><em>${t('fit', { score })}</em></button>`;
  }).join('');
  document.querySelectorAll('[data-rec]').forEach((button) => {
    button.onclick = () => choose(top[Number(button.dataset.rec)]);
  });
}

function renderResults() {
  markers.clearLayers();
  markerByPlaceKey.clear();
  const recommendedPlaces = new Set(recommendationPlaces());
  renderRecommendations();
  renderResultList();
  allResults.forEach((place) => {
    const recommended = recommendedPlaces.has(place);
    const marker = L.marker([place.lat, place.lng], {
      icon: markerIcon(place, recommended, isSelectedPlace(place)),
      zIndexOffset: isSelectedPlace(place) ? 1000 : recommended ? 500 : 0
    })
      .addTo(markers)
      .bindTooltip(`${recommended ? t('recommended') : ''}${place.name}`, { direction: 'top' })
      .on('click', () => choose(place, false, true));
    markerByPlaceKey.set(placeKey(place), { marker, place, recommended });
  });
  $('#more').hidden = allResults.length <= 4;
  $('#more').textContent = expanded ? t('collapse') : t('more', { count: allResults.length - 4 });
}

async function search(queryOverride = '') {
  const query = (queryOverride || $('#search').value).trim();
  if (!query) return showStatus(t('required'));
  lastQuery = query;
  showStatus(t('searching', { radius }));
  drawRadius();
  try {
    const origin = pos || { lat: 35.1796, lng: 129.0756 };
    const params = new URLSearchParams({
      query,
      x: origin.lng,
      y: origin.lat,
      radius: String(radius * 1000)
    });
    const response = await fetch(`/api/place-search?${params}`);
    const data = await response.json();
    if (!response.ok) throw new Error(data.error || t('searchFail'));
    const touristMode = query === '관광명소';
    const touristPriority = (place) => featuredTouristGroup(place) ? 1 : 0;
    const touristQuality = (place) => {
      const name = place.name;
      if (/해수욕장|전망|공원|박물관|사찰|문화마을|스카이워크|시장|타워|광장|카페거리/.test(name)) return 2;
      if (/둘레길|숲길|골목|맛길/.test(name)) return 0;
      return 1;
    };
    allResults = (data.documents || []).map((item) => ({
      id: item.id,
      name: item.place_name,
      address: item.road_address_name || item.address_name || t('noAddress'),
      category: item.category_name,
      lat: Number(item.y),
      lng: Number(item.x),
      phone: item.phone,
      url: item.place_url
    })).filter((place) => Number.isFinite(place.lat) && distance(place) <= radius)
      .sort((a, b) => touristMode
        ? touristPriority(b) - touristPriority(a) || touristQuality(b) - touristQuality(a) || distance(a) - distance(b)
        : distance(a) - distance(b));
    expanded = false;
    renderResults();
    if (allResults[0]) choose(allResults[0], false);
    showStatus(t('success', {
      origin: pos ? t('myLocation') : t('busanCenter'),
      radius,
      count: allResults.length
    }), true);
  } catch (error) {
    showStatus(error.message || t('searchFail'));
  }
}

function applyLanguage() {
  const s = strings[language];
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  $('#language').value = language;
  $('.brand').innerHTML = s.brand;
  $('#search').placeholder = s.placeholder;
  $('#searchButton').textContent = s.search;
  $('#serviceTag').textContent = s.tag;
  $('#heroTitle').innerHTML = s.hero;
  $('#heroSub').textContent = s.sub;
  $('#quickTitle').textContent = s.quickTitle;
  $('#quickHint').textContent = s.quickHint;
  $('#essentialTitle').textContent = s.essentialTitle;
  $('#essentialHint').textContent = s.essentialHint;
  $('#lifestyleTitle').textContent = s.lifestyleTitle;
  $('#lifestyleHint').textContent = s.lifestyleHint;
  $('#tourTitle').textContent = s.tourTitle;
  $('#tourHint').textContent = s.tourHint;
  $('.quick-search').setAttribute('aria-label', s.quickTitle);
  $('#language').setAttribute('aria-label', language === 'ko' ? '언어 선택' : language === 'en' ? 'Select language' : language === 'ja' ? '言語を選択' : '选择语言');
  document.querySelectorAll('[data-quick]').forEach((button) => {
    const copy = s.quick[button.dataset.quick];
    button.querySelector('b').textContent = copy[0];
    button.querySelector('small').textContent = copy[1];
  });
  const activeQuick = document.querySelector('[data-quick].active');
  if (activeQuick) $('#search').value = s.quick[activeQuick.dataset.quick][1];
  $('#locate').textContent = s.locate;
  $('#recommendTitle').textContent = s.recommendTitle;
  $('#recommendBadge').textContent = s.recommendBadge;
  $('#reviewTitle').textContent = s.reviewTitle;
  $('#nameLabel').textContent = s.name;
  $('#reviewName').placeholder = s.namePlaceholder;
  $('#ratingLabel').textContent = s.rating;
  $('#reviewText').placeholder = s.reviewPlaceholder;
  $('#reviewSave').textContent = s.reviewSave;
  $('#reviewNote').textContent = s.reviewNote;
  $('#roadviewEyebrow').textContent = s.roadviewEyebrow;
  $('#roadviewNotice').textContent = s.roadviewNotice;
  $('#roadviewClose').setAttribute('aria-label', s.roadviewClose);
  if (selected) $('#roadviewHeading').textContent = t('roadviewTitle', { place: selected.name });
  $('#resultsTitle').textContent = s.resultsTitle;
  $('#mapTitle').textContent = s.mapTitle;
  $('#radiusTitle').textContent = s.radiusTitle;
  $('#radiusDescription').textContent = s.radiusDescription;
  document.querySelectorAll('#radiusButtons button').forEach((button) => {
    button.textContent = t('radiusButton', { radius: button.dataset.radius });
  });
  document.querySelector('[data-mode="walk"]').textContent = `🚶 ${s.walk}`;
  document.querySelector('[data-mode="traffic"]').textContent = `🚌 ${s.traffic}`;
  document.querySelector('[data-mode="car"]').textContent = `🚗 ${s.car}`;
  drawRadius();
  if (allResults.length) {
    renderResults();
    showStatus(t('success', {
      origin: pos ? t('myLocation') : t('busanCenter'),
      radius,
      count: allResults.length
    }), true);
  } else {
    showStatus(s.initial);
    $('#info').innerHTML = `<small>${s.infoSmall}</small><h2>${s.infoTitle}</h2><p>${s.infoText}</p>`;
    $('#results').innerHTML = `<li>${s.resultsEmpty}</li>`;
    $('#routeTitle').textContent = s.routeTitle;
    $('#routeText').textContent = s.routeInitial;
  }
  if (selected) choose(selected, false);
  else $('#routeButton').textContent = t('routeButton', { mode: modeLabel() });
}

$('#searchForm').onsubmit = (event) => {
  event.preventDefault();
  document.querySelectorAll('[data-quick]').forEach((item) => {
    item.classList.remove('active');
    item.setAttribute('aria-pressed', 'false');
  });
  search();
};

$('#more').onclick = () => {
  expanded = !expanded;
  renderResults();
};

document.querySelectorAll('[data-quick]').forEach((button) => {
  button.setAttribute('aria-pressed', 'false');
  button.onclick = () => {
    document.querySelectorAll('[data-quick]').forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    $('#search').value = strings[language].quick[button.dataset.quick][1];
    search(button.dataset.query);
  };
});

$('#reviewForm').onsubmit = (event) => {
  event.preventDefault();
  if (!selected) return;
  const name = $('#reviewName').value.trim();
  const text = $('#reviewText').value.trim();
  if (!name || !text) return;
  const reviews = readReviews(selected);
  reviews.unshift({
    name,
    rating: Number($('#reviewRating').value),
    text,
    date: new Date().toLocaleDateString(language)
  });
  localStorage.setItem(reviewKey(selected), JSON.stringify(reviews));
  $('#reviewText').value = '';
  renderReviews(selected);
};

$('#locate').onclick = () => {
  if (!navigator.geolocation) return showStatus(t('unsupported'));
  showStatus(t('locating'));
  navigator.geolocation.getCurrentPosition((position) => {
    pos = { lat: position.coords.latitude, lng: position.coords.longitude };
    if (userMarker) userMarker.setLatLng([pos.lat, pos.lng]);
    else {
      userMarker = L.marker([pos.lat, pos.lng], {
        icon: L.divIcon({
          className: '',
          html: '<div class="user"></div>',
          iconSize: [20, 20],
          iconAnchor: [10, 10]
        })
      }).addTo(map);
    }
    map.setView([pos.lat, pos.lng], 15);
    drawRadius();
    showStatus(t('located', { accuracy: Math.round(position.coords.accuracy) }), true);
    if (lastQuery) search(lastQuery);
  }, () => showStatus(t('permission')), {
    enableHighAccuracy: true,
    timeout: 15000
  });
};

[1, 2, 3, 4, 5].forEach((km) => {
  const button = document.createElement('button');
  button.dataset.radius = km;
  button.className = km === radius ? 'active' : '';
  button.setAttribute('aria-pressed', String(km === radius));
  button.onclick = () => {
    radius = km;
    document.querySelectorAll('#radiusButtons button').forEach((item) => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    drawRadius();
    if (lastQuery || $('#search').value.trim()) search(lastQuery || $('#search').value.trim());
  };
  $('#radiusButtons').appendChild(button);
});

document.querySelectorAll('#modes button').forEach((button) => {
  button.onclick = () => {
    routeMode = button.dataset.mode;
    document.querySelectorAll('#modes button').forEach((item) => item.classList.toggle('active', item === button));
    $('#routeButton').textContent = t('routeButton', { mode: modeLabel() });
    if (selected) choose(selected, false);
  };
});

$('#routeButton').onclick = () => {
  if (!selected) return $('#routeText').textContent = t('selectFirst');
  if (!pos) return $('#routeText').textContent = t('locateFirst');
  const start = `${encodeURIComponent(t('myLocation'))},${pos.lat},${pos.lng}`;
  const end = `${encodeURIComponent(selected.name)},${selected.lat},${selected.lng}`;
  window.open(`https://map.kakao.com/link/by/${routeMode}/${start}/${end}`, '_blank', 'noopener');
};

$('#roadviewClose').onclick = closeRoadview;
$('#roadviewModal').onclick = (event) => {
  if (event.target === $('#roadviewModal')) closeRoadview();
};
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !$('#roadviewModal').hidden) closeRoadview();
});

$('#language').onchange = (event) => {
  language = event.target.value;
  localStorage.setItem('busan-map-language', language);
  applyLanguage();
};

applyLanguage();
