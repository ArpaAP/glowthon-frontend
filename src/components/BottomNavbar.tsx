import {
  TbBuilding,
  TbLocation,
  TbMapPin,
  TbSchool,
  TbUser,
} from 'react-icons/tb'
import BottomNavbarButton from './BottomNavbarButton'
import { useLocation, useNavigate } from 'react-router-dom'

export default function BottomNavbar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="flex justify-between px-8 py-2">
      <BottomNavbarButton
        active={location.pathname === '/'}
        icon={<TbMapPin />}
        label="주변"
        onClick={() => navigate('/')}
      />
      <BottomNavbarButton
        active={location.pathname.startsWith('/buildings')}
        icon={<TbBuilding />}
        label="시설"
        onClick={() => navigate('/buildings')}
      />
      <BottomNavbarButton
        active={location.pathname.startsWith('/rooms')}
        icon={<TbSchool />}
        label="강의실"
        onClick={() => navigate('/rooms')}
      />
      <BottomNavbarButton
        active={location.pathname.startsWith('/my')}
        icon={<TbUser />}
        label="MY"
        onClick={() => navigate('/my')}
      />
    </div>
  )
}
