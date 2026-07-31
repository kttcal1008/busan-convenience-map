# 부산 편의지도

카카오 Local API로 부산 주변 장소를 반경별로 검색하고, 현재 위치와 카카오맵 길찾기를 연결하는 공개 웹앱입니다.

## Vercel 배포

1. GitHub 저장소를 Vercel에 Import합니다.
2. Vercel 프로젝트의 **Environment Variables**에 `KAKAO_REST_API_KEY`와 `KAKAO_JS_KEY`를 설정합니다.
3. 카카오 Developers의 JavaScript 키에 배포 도메인을 **JavaScript SDK 도메인**으로 등록합니다.

REST API 키는 절대 저장소에 커밋하지 않습니다. GitHub Pages는 서버 환경변수를 보호할 수 없어 이 앱의 카카오 검색 프록시 배포 대상에는 적합하지 않습니다.
