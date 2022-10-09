/* eslint-disable no-underscore-dangle */
import { useRecoilValue } from 'recoil'

import { scrappedArticlesState } from 'store/atom'
import Article from 'components/Article'

import style from './scrap.module.scss'

const Scrap = () => {
  const scrappeds = useRecoilValue(scrappedArticlesState)

  return (
    <div className={style.scrap}>
      <ul>
        {scrappeds.map((article: IArticle) => (
          <li key={article._id}>
            <Article article={article} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Scrap
