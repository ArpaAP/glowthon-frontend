# KNAP

## 목차

## 프로젝트 소개

경북대학교 지도 서비스

## 동기 및 목적

- 지역 사회의 지속 가능한 발전을 위해 지역 인재 양성을 목표로 합니다.
- 우리는 지역사회의 가장 많은 인재가 밀집되어 있는 경북대학교의 문제를 해결함으로써 지역 사회의 지속 가능한 발전을 야기 하려합니다.
- KNAP은 교육 접근성 향상, 교통 및 안전 개선, 교내 커뮤니티 활성화 및 학생들의 참여도 증대를 목표로 한 모바일 웹 사이트입니다.

### Soleil 팀

| [<img src="https://avatars.githubusercontent.com/u/56078563?v=4" width="100px">](https://github.com/jamie2779) | [<img src="https://avatars.githubusercontent.com/u/54466872?v=4" width="100px">](https://github.com/ArpaAP) |[<img src="https://avatars.githubusercontent.com/u/81242448?v=4" width="100px">](https://github.com/ahapwhs0414) | [<img src="https://avatars.githubusercontent.com/u/139311232?v=4" width="100px">](https://github.com/moongi05) |
| :------: | :------: | :------: |:------:|
|[멋쟁이사자처럼 박재민](https://github.com/jamie2779)|[멋쟁이사자처럼 황부연](https://github.com/ArpaAP)|[GetIT 권선우](https://github.com/ahapwhs0414)|[GetIT 김문기](https://github.com/moongi05)|


## 주요 기능

- **학교 지도 렌더링**:  
  카카오맵 API 활용하여 학교 지도를 화면에 렌더링

- **교내 세부 시설물 정보 표시**:  
  학교 지도 위에 기존 지도 서비스나 학교 시설 안내에서는 제공하지 않는 교내 세부 시설물(편의점, 카페, 인쇄소, 학식 등) 정보를 표시

- **내 위치 표시**:  
  본인의 정확한 위치를 표시. 플랫폼 네이티브 API (GeoLocation)를 활용해 사용자 기기로부터 위치정보 가져옴

- **교내 길찾기(내비게이션)**:  
  시작 지점과 도착 지점을 정하면 지도에 경로를 표시
- **건물 내부 구조도**
- **강의실 위치 정보**

## 주요 기술 스택

- **프론트엔드 프레임워크**: React + Vite (with TypeScript)
- **디자인 프레임워크**: Tailwind CSS, Framer Motion
- **폰트** - Pretendard

백엔드 기술 스택은 백엔드 레포지토리 참조
> [백엔드 레포지토리](https://github.com/jamie2779/glowthon-backend)

## API 명세서
[백엔드 API 명세서 Notion](https://jamie2779.notion.site/7b13a03d5cdc4f9f8e068e59ebeb7c28?pvs=4) 참조

## 설치, 실행, 빌드

### 초기 설정

우선 `frontend` 디렉토리에 `.env` 파일을 만들어야 합니다. 같은 폴더에 있는 `.env.example` 파일을 복사 및 붙여넣기해서 사용하세요.

다음과 같이 백엔드 URL과 카카오 API 자바스크립트 키를 작성하세요.

```sh
VITE_BACKEND_URL=http://localhost:8080     # 백엔드 URL
VITE_KAKAO_API_JS_KEY=kakao-api-key        # 카카오 API JavaScript 키 (REST 키 아님!)
```

### 패키지 설치

본 레포지토리를 클론한 후, 이 레포지토리 루트에서 다음 명령을 실행하여 패키지를 설치하세요.

```bash
npm install # or
yarn install
```

### 실행하기

빌드 없이 개발 모드로 즉시 실행하려면 아래 명령을 실행하세요. 기본 포트는 `5173`입니다.

```bash
npm run dev # or
yarn dev
```

`http://localhost:5173` 에서 웹서버가 열립니다.

### 빌드하기

소스를 빌드하려면 다음 명령을 실행하세요. 루트 디렉토리에 `dist` 폴더가 생성되어 정적 파일이 담기게 됩니다.

```bash
npm run build # or
yarn build
```

## 주요 구조

```python
/
├── public/               # 정적 파일 폴더
├── src/                  # 소스 코드 폴더
│   ├── assets/           # 이미지 등 리소스 폴더
│   ├── components/       # 컴포넌트 폴더
│   ├── pages/            # 페이지 폴더
│   ├── constants/        # 백엔드 연동 전에, 프론트엔드 단독으로 테스트하기 위해 만든 샘플 데이터룰 담는 곳
│   ├── types/            # 타입 정의 폴더
│   │   └── kakaoapi.ts   # 카카오 API에 대한 타입 정의 파일
│   ├── App.tsx           # 메인 페이지
│   ├── index.css
│   └── main.tsx          # 실행 시작지점
├── .env                  # Env 파일
├── .env.example          # Env 파일 예시
├── index.html
├── package.json
├── tailwind.config.js    # Tailwind CSS 라이브러리 설정 파일
└── vite.config.ts        # Vite 설정 파일
```
