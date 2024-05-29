import { TbMenu2 } from 'react-icons/tb'

export default function TopBar() {
  return (
    <div className="bg-white flex gap-3 items-center px-3 py-2.5 shadow-md rounded-xl absolute top-3 inset-x-3 z-[99999]">
      <button type="button" className="p-1">
        <TbMenu2 className="text-xl text-gray-400" />
      </button>
      <button type="button" className="text-gray-400 font-light">
        시설물 또는 건물 검색...
      </button>
    </div>
  )
}
