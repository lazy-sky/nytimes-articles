import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Scrap from './Scrap'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/scrap' element={<Scrap />} />
      </Routes>
    </div>
  )
}

export default App
