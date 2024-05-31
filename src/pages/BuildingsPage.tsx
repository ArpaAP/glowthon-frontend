import { TbChevronRight, TbSearch } from 'react-icons/tb'

export default function BuildingsPage() {
  return (
    <div className="bg-gray-100/75 h-full">
      <div className="px-8 py-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 pb-6">
          <div className="text-xl font-bold text-gray-800">주변</div>
          <div className="text-xl font-bold text-gray-400">최근</div>
        </div>

        <div className="rounded-xl border border-gray-300 px-4 py-2 flex items-center gap-2">
          <TbSearch className="text-gray-400" />
          <input
            type="text"
            className="bg-transparent w-full"
            placeholder="건물 또는 강의실 검색..."
          />
        </div>

        <hr className="my-0.5" />

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
            <div className="font-semibold pb-0.5">IT대학 5호관</div>
            <div className="text-sm text-gray-500 font-light">412 | 128m</div>
          </button>

          <button
            type="button"
            className="rounded-xl bg-white px-4 py-2 w-full text-left"
          >
            <div className="font-semibold pb-0.5">IT대학 4호관</div>
            <div className="text-sm text-gray-500 font-light">411 | 256m</div>
          </button>
          <button
            type="button"
            className="rounded-xl bg-white px-4 py-2 w-full text-left"
          >
            <div className="font-semibold pb-0.5">IT대학 2호관</div>
            <div className="text-sm text-gray-500 font-light">411 | 256m</div>
          </button>
          <button
            type="button"
            className="rounded-xl bg-white px-4 py-2 w-full text-left"
          >
            <div className="font-semibold pb-0.5">공과대학 6호관</div>
            <div className="text-sm text-gray-500 font-light">411 | 256m</div>
          </button>
        </div>
      </div>
    </div>
  )
}
