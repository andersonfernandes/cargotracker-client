import { Route, Routes } from 'react-router-dom'

import CargoBook from './pages/cargo/Book'
import CargoDashboard from './pages/cargo/Dashboard'
import CargoTrack from './pages/cargo/Track'
import Home from './pages/Home'

export default function Router() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/track' element={<CargoTrack />} />
        <Route path='/book' element={<CargoBook />} />
        <Route path='/dashboard' element={<CargoDashboard />} />
      </Routes>
  )
}
