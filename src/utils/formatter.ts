import dayjs from 'dayjs'
import 'dayjs/locale/ko'

export const formatDate = (date: string | null, format: string = 'YYYY.MM.DD (dd)') => {
  if (!date) return ''

  return dayjs(date).locale('ko').format(format)
}
