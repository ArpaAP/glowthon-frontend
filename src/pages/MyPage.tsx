import { TbChevronRight, TbSearch } from 'react-icons/tb'

export default function MyPage() {
  return (
    <div className="bg-gray-100/75 h-full">
      <div className="px-6 py-8 flex flex-col gap-2">
        <div className="flex gap-6 items-center rounded-xl bg-white px-4 py-4 w-full text-left mb-2">
          <div className="h-16 w-16 bg-black rounded-full" />
          <div>
            <div className="text-xl font-bold pb-1">황부연</div>
            <div className="text-sm font-light">
              경북대학교(본교) IT대학 컴퓨터학부
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
