import style from './loading.module.scss'

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.spinner} />
    </div>
  )
}

export default Loading
