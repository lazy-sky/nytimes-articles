/* eslint-disable no-underscore-dangle */
import { useRecoilValue } from 'recoil'

import { scrappedArticlesState } from 'store/atom'
import SearchFilters from 'components/SearchFilters'
import Article from 'components/Article'

import style from './scrap.module.scss'
import NoArticles from 'components/NoArticles'
import { Link } from 'react-router-dom'

const Scrap = () => {
  const scrappeds = useRecoilValue(scrappedArticlesState)

  return (
    <div className={style.scrap}>
      {scrappeds.length ? (
        <>
          <SearchFilters />
          <ul className={style.articles}>
            {scrappeds.map((article: IArticle) => (
              <li key={article._id}>
                <Article article={article} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <NoArticles text='저장된 스크랩이 없습니다.'>
          <Link to='/' className={style.link}>
            스크랩 하러 가기
          </Link>
        </NoArticles>
      )}
    </div>
  )
}

export default Scrap
