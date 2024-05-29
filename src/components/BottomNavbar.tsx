import {
  TbBuilding,
  TbLocation,
  TbMap,
  TbMapPin,
  TbNavigation,
  TbSchool,
  TbUser,
} from 'react-icons/tb'
import BottomNavbarButton from './BottomNavbarButton'

export default function BottomNavbar() {
  return (
    <div className="flex justify-between px-8 py-2">
      <BottomNavbarButton active icon={<TbMapPin />} label="주변" />
      <BottomNavbarButton icon={<TbLocation />} label="길찾기" />
      <BottomNavbarButton icon={<TbBuilding />} label="시설" />
      <BottomNavbarButton icon={<TbSchool />} label="강의실" />
      <BottomNavbarButton icon={<TbUser />} label="MY" />
    </div>
  )
}
