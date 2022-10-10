import style from './error.module.scss'

const Error = () => {
  return (
    <div className={style.error}>
      <div className={style.message}>Error</div>
    </div>
  )
}

export default Error
