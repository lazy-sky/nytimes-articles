/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useInView } from 'react-intersection-observer'

import { getArticles } from 'services/article'
import Article from 'components/Article'

import style from './home.module.scss'

const Home = () => {
  const { status, data, fetchNextPage } = useInfiniteQuery(
    // ['articles', query],
    ['articles'],
    ({ pageParam }) => getArticles(pageParam),
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

  if (status === 'loading') return <div>loading</div>
  if (status === 'error') return <div>error</div>

  return (
    <div className={style.home}>
      <ul className={style.articles}>
        {data.pages.map((page, index) => {
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
        })}
      </ul>
    </div>
  )
}

export default Home
