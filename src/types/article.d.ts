// 제목
// 신문사
// 기자
// 날짜
interface IArticle {
  _id: string
  headline: {
    main: string
  }
  web_url: string
  pub_date: string
  source: string
  byline: {
    original: string
  }
}
