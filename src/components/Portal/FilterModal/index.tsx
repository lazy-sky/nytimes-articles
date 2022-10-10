import { useState } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import cx from 'classnames'
import ReactDatePicker from 'react-datepicker'

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
  const setNationsQuery = useSetRecoilState(nationsQueryState)
  const [inputs, setInputs] = useState({
    headline: headlineQuery,
    date: dateQuery,
  })
  const { headline, date } = inputs
  const nations = [
    { ko: '대한민국', en: 'South Korea' },
    { ko: '중국', en: 'China' },
    { ko: '일본', en: 'Japan' },
    { ko: '미국', en: 'United States' },
    { ko: '북한', en: 'North Korea' },
    { ko: '러시아', en: 'Russia' },
    { ko: '프랑스', en: 'France' },
    { ko: '영국', en: 'England' },
  ]
  const [selectedNations, setSelectedNations] = useState<string[]>([])

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
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
                <li key={nation.ko}>
                  <button
                    type='button'
                    onClick={() => handleNationClick(nation.en)}
                    className={cx(selectedNations.includes(nation.en) && style.active)}
                  >
                    {nation.ko}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <button type='button' onClick={handleApplyClick} className={style.submitBtn}>
            필터 적용하기
          </button>
        </div>
      </div>
    </Portal>
  )
}

export default FilterModal
