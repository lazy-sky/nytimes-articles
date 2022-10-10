/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { StarIcon, StarFilledIcon } from 'assets/svg'
import { formatDate } from 'utils'

import style from './article.module.scss'
import { useRecoilState, useRecoilValue } from 'recoil'
import { scrappedArticlesState } from 'store/atom'
import { scrappedArticlesIdsState } from 'store/selector'

interface IArticleProps {
  article: IArticle
}

const Article = ({ article }: IArticleProps) => {
  const [scrappeds, setScrappeds] = useRecoilState(scrappedArticlesState)
  const scrappedsIds = useRecoilValue(scrappedArticlesIdsState)
  const { _id, headline, pub_date, web_url, source, byline } = article

  const handleScrapToggle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if (scrappedsIds.includes(_id)) {
      setScrappeds(scrappeds.filter((scrapped) => article._id !== scrapped._id))
      return
    }
    setScrappeds((prev) => [article, ...prev])
  }

  return (
    <div className={style.article}>
      <a href={web_url}>
        <div className={style.top}>
          <h4 className={style.heading}>{headline.main}</h4>
          <button type='button' onClick={handleScrapToggle} className={style.scrap}>
            {scrappedsIds.includes(_id) ? <StarFilledIcon /> : <StarIcon />}
          </button>
        </div>
        <div className={style.bottom}>
          <div className={style.source}>
            <div className={style.sourceItem}>{source}</div>
            <div className={style.sourceItem}>{byline.original}</div>
          </div>
          <div className={style.date}>{formatDate(pub_date)}</div>
        </div>
      </a>
    </div>
  )
}

export default Article
