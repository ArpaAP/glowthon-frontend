import { TbBookmark, TbChevronRight, TbLogout, TbSearch } from 'react-icons/tb'
import logo from '../assets/logo.png'

export default function MyPage() {
  return (
    <div className="bg-gray-100/75 h-full">
      <div className="px-6 py-8 flex flex-col gap-2">
        <div className="flex gap-3 items-center pb-3">
          <img src={logo} className="h-8" />
          <div className="text-rose-600 text-xl font-bold">KNAP</div>
        </div>

        <div className="flex gap-6 items-center rounded-xl bg-white px-4 py-4 w-full text-left">
          <div className="h-16 w-16 bg-black rounded-full" />
          <div>
            <div className="text-xl font-bold pb-1">황부연</div>
            <div className="text-sm font-light">
              경북대학교(본교)
              <br />
              IT대학 컴퓨터학부
            </div>
          </div>
        </div>

        <hr className="my-1" />

        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="flex gap-6 items-center rounded-xl bg-white px-4 py-3 w-full text-left"
          >
            <TbBookmark className="text-xl" />
            <span>내 북마크</span>
          </button>

          <button
            type="button"
            className="flex gap-6 items-center rounded-xl bg-white px-4 py-3 w-full text-left text-rose-500"
          >
            <TbLogout className="text-xl" />
            <span>로그아웃</span>
          </button>
        </div>
      </div>
    </div>
  )
}
