import GNB from 'components/GNB'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Scrap from './Scrap'

import style from './App.module.scss'

const App = () => {
  return (
    <div style={{ background: 'gray' }}>
      <div className={style.app}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/scrap' element={<Scrap />} />
        </Routes>
        <footer>
          <GNB />
        </footer>
      </div>
    </div>
  )
}

export default App
