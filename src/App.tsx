import { Route, Routes } from 'react-router-dom'
import BottomNavbar from './components/BottomNavbar'
import MapPage from './pages/MapPage'
import FacilitiesPage from './pages/FacilitiesPage'
import BuildingDetailPage from './pages/BuildingDetailPage'
import MyPage from './pages/MyPage'
import LectureRoomsPage from './pages/LectureRoomsPage'

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="max-w-md mx-auto bg-white h-full flex flex-col shadow-lg">
        <Routes>
          <Route path="/" element={<MapPage />} />
          <Route path="/buildings" element={<FacilitiesPage />} />
          <Route
            path="/buildings/:buildingId"
            element={<BuildingDetailPage />}
          />
          <Route path="/rooms" element={<LectureRoomsPage />} />
          <Route path="/my" element={<MyPage />} />
        </Routes>

        <div className="mt-auto">
          <BottomNavbar />
        </div>
      </div>
    </div>
  )
}

export default App
