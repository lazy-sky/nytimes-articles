import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import cx from 'classnames'

import { dateQueryState, headlineQueryState, nationsQueryState } from 'store/atom'
import { formatDate } from 'utils'
import FilterModal from 'components/Portal/FilterModal'
import { CalendarIcon, SearchIcon } from 'assets/svg'

import style from './searchFilters.module.scss'

const SearchFilters = () => {
  const headlineQuery = useRecoilValue(headlineQueryState)
  const dateQuery = useRecoilValue(dateQueryState)
  const nationsQuery = useRecoilValue(nationsQueryState)
  const filterItems = [
    {
      defaultText: '전체 헤드라인',
      icon: <SearchIcon />,
      activeText: headlineQuery,
    },
    {
      defaultText: '전체 날짜',
      icon: <CalendarIcon />,
      activeText: formatDate(dateQuery, 'YYYY.MM.DD'),
    },
    {
      defaultText: '전체 국가',
      icon: null,
      activeText:
        nationsQuery.length &&
        (nationsQuery.length === 1
          ? String(nationsQuery)
          : `${String(nationsQuery[0])} 외 ${nationsQuery.length - 1}개`),
    },
  ]
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleFilterModalToggle = () => {
    setIsModalOpen((prev) => !prev)
  }

  return (
    <>
      <button type='button' className={style.searchFilters} onClick={handleFilterModalToggle}>
        <ul className={style.items}>
          {filterItems.map(({ defaultText, icon, activeText }) => (
            <li key={defaultText} className={cx(style.item, activeText && style.active)}>
              {icon}
              <div className={style.text}>{activeText || defaultText}</div>
            </li>
          ))}
        </ul>
      </button>
      {isModalOpen && <FilterModal onClick={handleFilterModalToggle} />}
    </>
  )
}

export default SearchFilters
