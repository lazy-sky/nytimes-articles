/* eslint-disable no-underscore-dangle */
/* eslint-disable camelcase */
import { useRecoilState, useRecoilValue } from 'recoil'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { scrappedArticlesState } from 'store/atom'
import { scrappedArticlesIdsState } from 'store/selector'
import { formatDate } from 'utils'
import { StarIcon, StarFilledIcon } from 'assets/svg'

import style from './article.module.scss'

interface IArticleProps {
  article: IArticle
}

const Article = ({ article }: IArticleProps) => {
  const [scrappeds, setScrappeds] = useRecoilState(scrappedArticlesState)
  const scrappedsIds = useRecoilValue(scrappedArticlesIdsState)
  const { _id, headline, pub_date, web_url, source, byline } = article

  const handleScrapToggle: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const MySwal = withReactContent(Swal)

    if (scrappedsIds.includes(_id)) {
      setScrappeds(scrappeds.filter((scrapped) => article._id !== scrapped._id))
      MySwal.fire('스크랩이 해제되었습니다.')
      return
    }

    MySwal.fire('스크랩되었습니다.')
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
