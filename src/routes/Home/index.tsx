/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'
import { useInView } from 'react-intersection-observer'

import { dateQueryState, headlineQueryState, nationsQueryState } from 'store/atom'
import SearchFilters from 'components/SearchFilters'
import { getArticles } from 'services/article'
import Article from 'components/Article'
import NoArticles from 'components/NoArticles'
import Error from 'components/Error'
import Loading from 'components/Loading'

import style from './home.module.scss'

const Home = () => {
  const headlineQuery = useRecoilValue(headlineQueryState)
  const dateQuery = useRecoilValue(dateQueryState)
  const nationsQuery = useRecoilValue(nationsQueryState)
  const { status, data, fetchNextPage } = useInfiniteQuery(
    ['articles', { headlineQuery, dateQuery, nationsQuery }],
    ({ pageParam }) => getArticles(pageParam, headlineQuery, dateQuery, nationsQuery),
    {
      getNextPageParam: (lastPage) => lastPage.nextPage,
    }
  )

  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [fetchNextPage, inView])

  if (status === 'error') return <Error />
  if (status === 'loading') return <Loading />

  return (
    <div className={style.home}>
      <SearchFilters />
      <ul className={style.articles}>
        {data.pages[0].docs.length ? (
          data.pages.map((page, index) => {
            const pageKey = `page-${index}`

            return (
              <React.Fragment key={pageKey}>
                {page.docs.map((article: IArticle) => (
                  <li key={article._id} ref={ref}>
                    <Article article={article} />
                  </li>
                ))}
              </React.Fragment>
            )
          })
        ) : (
          <NoArticles text='검색 결과에 맞는 기사가 없습니다.' />
        )}
      </ul>
    </div>
  )
}

export default Home
