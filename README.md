# nytimes-articles

```
git clone https://github.com/lazy-sky/nytimes-articles.git

cd nytimes-articles

npm i
npm start # .env 파일의 REACT_APP_API_KEY 필요
```

## Deploy

[Demo](https://nytimes-articles.vercel.app/)

## Project Tree

```
📦src
 ┣ 📂assets
 ┃ ┗ 📂svg
 ┣ 📂components
 ┃ ┣ 📂Article
 ┃ ┣ 📂Error
 ┃ ┣ 📂GNB
 ┃ ┣ 📂Loading
 ┃ ┣ 📂NoArticles
 ┃ ┣ 📂Portal
 ┃ ┃ ┣ 📂FilterModal
 ┃ ┗ 📂SearchFilters
 ┣ 📂routes
 ┃ ┣ 📂Home
 ┃ ┣ 📂Scrap
 ┃ ┗ 📜index.tsx
 ┣ 📂services
 ┃ ┗ 📜article.ts
 ┣ 📂store
 ┃ ┣ 📜atom.ts
 ┃ ┗ 📜selector.ts
 ┣ 📂styles
 ┃ ┣ 📂base
 ┃ ┣ 📂constants
 ┣ 📂types
 ┃ ┣ 📜article.d.ts
 ┃ ┗ 📜global.d.ts
 ┣ 📂utils
 ┃ ┣ 📜formatter.ts
 ┣ 📜index.tsx
```

## Feature with Demo

- [x] 모바일 뷰로만 구현하면 됩니다.
- [x] 2개의 화면으로 구성되어 있습니다. 
- Homescreen 
  - [x] 앱 시작시에 바로 나오는 화면입니다. 
  - [x] new york times의 Article Search api 호출 데이터로 보여준다. 
  - [x] 무한 스크롤을 적용해야한다. 
  - [x] 1번 항목들을 누르면 필터 모달이 나와야 한다. 
  - [x] 2번 항목을 누르면 시스템 Datepicker가 나와서 yyyy.mm.dd 포멧으로 선택할 수 있어야 한다. 
  - [x] 3번 항목 “국가" 선택지들은 체크박스 형식이며, 3-1 번 항목은 클릭전(inactive) 상태, 3-2 번 항목은 클릭 후(active) 상태
    - [x] 여러 선택지가 선택 가능해야 합니다. 
  - [x] “필터 적용하기" 클릭 시에 위의 필터들이 적용된 데이터로 refresh 한다. 
  - [x] 4번 항목 헤드라인은 기사의 헤드라인을 기준 으로 필터링 한다. string만 받는다. 
  - [x] 필터링이 적용되면 5-1, 5-2, 5-3번 항목처럼 변해야 한다.
    - [x] 5-1은 너무 길어지면 말줄임표를 적용한다. 
    - [x] 5-2는 yyyy.mm.dd 포멧을 사용한다. 
    - [x] 5-3은 제일 처음 `${제일처음 데이터}외 ${총 데이터 갯수 - 1}` 포멧으로 작성한다. 
  - [x] 6-1 은 스크랩이 되지 않은 (디폴트)상태입니다. 클릭하면, 6-2로 변합니다. 스크랩된 데이터는 scrapscreen에서 리스트로 볼 수 있습니다.
  - [x] 6-2은 스크랩이 된 상태입니다. 클릭하면 6-1로 변합니다. 클릭되면 scrapscreen에서도 지워집니다. 
  - [x] 리스트의 기사를 클릭하면 해당 기사에 해당하는 new york times의 기사 웹페이지로 리다이렉트 합니다. 뒤로가기를 클릭하면 프로덕트로 돌아올 수 있어야합니다. 
  - Scrapscreen 
    - [x] Homescreen과 모든 기능이 같으나, 해당 화면에서 나오는 기사는 스크랩된 기사만 나와야 한다. 
    - [x] 해당 화면에서 스크랩을 제거하면 바로 사라져야한다. 
    - [x] 스크랩된 기사가 없으면 03_2_scrapscreen_nodata 화면이 랜더링 되어야 하며, 9번 버튼을 클릭하면 홈화면으로 이동한다. 
    
  - 부가 설명 
    - [x] 웹을 껐다 켜도 스크랩된 데이터는 남아있어야 한다. 
    - [x] 스크랩이 될 때, 해제 될 때는 시스템 alert이나 toast 등으로 유저에게 간단하게 알려줘야 한다. 
    - [x] 피그마 디자인을 준수해야 한다. 
    - [x] api로 받아오는 데이터 외의 문구들은 모두 피그마에 적힌 것을 기준으로 한다. 
    - [ ] 상단의 필터 부분은 “홈"화면과 “스크랩"화면이 서로 별개입니다. 예를들어, 홈화면의 필터의 값을 변경한 뒤 스크랩 화면으로 가더라도, 스크랩 화면의 필터가 변경되선 안됩니다.

### Home

#### 로딩 및 스크롤

#### 필터

#### 스크랩

### Scrap

#### 스크랩 항목 없음

#### 스크랩 해제

## Review

[회고](./REVIEW.md)

## Tech & Libraries

#### State Managemnt

- react query
- recoil

#### Style

- scss
- css module
- classnames

#### Coding Convention

- eslint
- stylelint
- prettier

#### Utilities and Others

- typescript
- axios: fetch 기능
- dayjs: 날짜 포맷팅
- recoil-persist: local storage와의 연동
- react-datepicker: 날짜 선택 기능
- react-intersection-observer: 무한 스크롤
- sweetalert: alert UI
