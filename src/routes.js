import { Route, Routes } from 'react-router-dom'

import CargoBook from './pages/Book'
import CargoDashboard from './pages/Dashboard'
import CargoTrack from './pages/Track'
import Home from './pages/Home'
import Cargo from './pages/Cargo'

export default function Router() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/track' element={<CargoTrack />} />
        <Route path='/book' element={<CargoBook />} />
        <Route path='/dashboard' element={<CargoDashboard />} />
        <Route path='/dashboard/:id' element={<Cargo />} />
      </Routes>
  )
}
