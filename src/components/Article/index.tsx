/* eslint-disable camelcase */
import { useState } from 'react'

import { StarIcon, StarFilledIcon } from 'assets/svg'
import { formatDate } from 'utils'

import style from './article.module.scss'

interface IArticleProps {
  article: IArticle
}

const Article = ({ article }: IArticleProps) => {
  const { headline, pub_date, web_url, source, byline } = article
  const [isScrapped, setIsScrapped] = useState(false)

  const handleScrapToggle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    setIsScrapped((prev) => !prev)
  }

  return (
    <div className={style.article}>
      <a href={web_url}>
        <div className={style.top}>
          <h4 className={style.heading}>{headline.main}</h4>
          <button type='button' onClick={handleScrapToggle} className={style.scrap}>
            {isScrapped ? <StarFilledIcon /> : <StarIcon />}
          </button>
        </div>
        <div className={style.bottom}>
          <div className={style.source}>
            <div>{source}</div>
            <div>{byline.original}</div>
          </div>
          <div className={style.date}>{formatDate(pub_date)}</div>
        </div>
      </a>
    </div>
  )
}

export default Article
