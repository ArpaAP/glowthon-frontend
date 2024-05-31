import { Route, Routes } from 'react-router-dom'
import BottomNavbar from './components/BottomNavbar'
import MapPage from './pages/MapPage'
import BuildingsPage from './pages/BuildingsPage'

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="max-w-md mx-auto bg-white h-full flex flex-col shadow-lg">
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/buildings" element={<BuildingsPage />} />
        </Routes>

        <div className="mt-auto">
          <BottomNavbar />
        </div>
      </div>
    </div>
  )
}

export default App
