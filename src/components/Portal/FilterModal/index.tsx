import { useState } from 'react'
import { useRecoilState } from 'recoil'
import ReactDatePicker from 'react-datepicker'
import cx from 'classnames'

import { dateQueryState, headlineQueryState, nationsQueryState } from 'store/atom'
import { formatDate } from 'utils'
import Portal from 'components/Portal'
import { CalendarIcon } from 'assets/svg'

import 'react-datepicker/dist/react-datepicker.css'
import style from './filterModal.module.scss'

interface IModalProps {
  onClick: () => void
}

const FilterModal = ({ onClick }: IModalProps) => {
  const [headlineQuery, setHeadlineQuery] = useRecoilState(headlineQueryState)
  const [dateQuery, setDateQuery] = useRecoilState(dateQueryState)
  const [nationsQuery, setNationsQuery] = useRecoilState(nationsQueryState)
  const [inputs, setInputs] = useState({
    headline: headlineQuery,
    date: dateQuery,
  })
  const { headline, date } = inputs
  const nations = ['South Korea', 'China', 'Japan', 'United States', 'North Korea', 'Russia', 'France', 'England']
  const [selectedNations, setSelectedNations] = useState<string[]>(nationsQuery)

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const handleNationClick = (nation: string) => {
    if (selectedNations.includes(nation)) {
      setSelectedNations((prev) => prev.filter((item) => item !== nation))
      return
    }

    setSelectedNations((prev) => [...prev, nation])
  }

  const handleApplyClick = () => {
    setHeadlineQuery(headline)
    setDateQuery(formatDate(date, 'YYYYMMDD'))
    setNationsQuery(selectedNations)
    onClick()
  }

  return (
    <Portal>
      <div className={style.filterModal}>
        <div className={style.wrapper}>
          <div className={style.field}>
            <label htmlFor='headline'>헤드라인</label>
            <div className={style.queryInput}>
              <input
                type='text'
                name='headline'
                id='headline'
                placeholder='검색하실 헤드라인을 입력해주세요.'
                value={headline}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={style.field}>
            <label htmlFor='date'>날짜</label>
            <div className={style.queryInput}>
              <input
                type='text'
                name='date'
                id='date'
                placeholder='날짜를 선택해주세요'
                value={formatDate(date)}
                onChange={handleInputChange}
              />
              <div className={style.datePicker}>
                <ReactDatePicker
                  onChange={(selectedDate) => {
                    setInputs({ ...inputs, date: String(selectedDate) })
                  }}
                />
              </div>
              <CalendarIcon />
            </div>
          </div>
          <div className={style.field}>
            <label htmlFor='nations'>국가</label>
            <ul id='nations' className={style.nations}>
              {nations.map((nation) => (
                <li key={nation}>
                  <button
                    type='button'
                    onClick={() => handleNationClick(nation)}
                    className={cx(selectedNations.includes(nation) && style.active)}
                  >
                    {nation}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button type='button' onClick={handleApplyClick} className={style.applyBtn}>
            필터 적용하기
          </button>
        </div>
      </div>
    </Portal>
  )
}

export default FilterModal
