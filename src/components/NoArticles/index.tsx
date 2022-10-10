import { SheetIcon } from 'assets/svg'

import style from './noArticles.module.scss'

interface INoArticlesProps {
  text: string
  children?: React.ReactNode
}

const NoArticles = ({ text, children }: INoArticlesProps) => {
  return (
    <div className={style.noArticles}>
      <div className={style.icon}>
        <SheetIcon />
      </div>
      {text}
      {children}
    </div>
  )
}

export default NoArticles
