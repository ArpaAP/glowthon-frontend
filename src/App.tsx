import BottomNavbar from './components/BottomNavbar'
import TopBar from './components/TopBar'
import MapPage from './pages/MapPage'

function App() {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="max-w-md mx-auto bg-white h-full flex flex-col shadow-lg relative">
        <TopBar />

        <MapPage />

        <div className="mt-auto">
          <BottomNavbar />
        </div>
      </div>
    </div>
  )
}

export default App
