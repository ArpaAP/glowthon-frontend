import { TbChevronRight } from 'react-icons/tb'

export default function LectureRoomsPage() {
  return (
    <div className="bg-gray-100/75" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="px-6 pt-8 h-full flex flex-col gap-2">
        <div className="flex items-center gap-2 pb-6">
          <div className="text-xl font-bold text-rose-500">내 강의실</div>
          <div className="text-xl font-bold text-rose-500/25">전체</div>
        </div>

        <button
          type="button"
          className="flex justify-between items-center rounded-xl bg-white px-4 py-2 w-full text-left mb-2"
        >
          <span>주변 빈 강의실이 2개 있습니다!</span>
          <TbChevronRight className="text-gray-400" />
        </button>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            className="rounded-xl bg-white px-4 py-2 w-full text-left"
          >
            <div className="font-semibold pb-0.5">415</div>
            <div className="text-sm text-gray-500 font-light">
              대학글쓰기 강의실
            </div>
          </button>

          <button
            type="button"
            className="rounded-xl bg-white px-4 py-2 w-full text-left"
          >
            <div className="font-semibold pb-0.5">418</div>
            <div className="text-sm text-gray-500 font-light">
              이산수학 강의실
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
