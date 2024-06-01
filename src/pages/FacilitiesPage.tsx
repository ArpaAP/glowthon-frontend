import { TbChevronRight, TbSearch } from 'react-icons/tb'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { facilityTypes } from '../constants/facilities'
import { Building } from '../types/building'
import axios from 'axios'
import urlJoin from 'url-join'
import { Facility } from '../types/facility'

export default function FacilitiesPage() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const [buildings, setBuildings] = useState<Building[]>([])
  const [facilities, setFacilities] = useState<Facility[]>([])

  useEffect(() => {
    axios
      .get(urlJoin(import.meta.env.VITE_BACKEND_URL, '/api/v1/buildings'))
      .then((r) => {
        setBuildings(r.data)
      })
      .catch((e) => {
        console.error(e)
      })

    axios
      .get(urlJoin(import.meta.env.VITE_BACKEND_URL, '/api/v1/facilities'))
      .then((r) => {
        setFacilities(r.data)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  if (!buildings.length || !facilities.length) {
    return (
      <div className="flex justify-center items-center text-rose-500 h-full">
        불러오는 중...
      </div>
    )
  }

  return (
    <div className="bg-gray-100/75" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="px-6 pt-8 h-full flex flex-col gap-2">
        <div className="flex items-center gap-2 pb-6">
          <div className="text-xl font-bold text-rose-500">주변</div>
          <div className="text-xl font-bold text-rose-500/25">최근</div>
        </div>

        <div className="rounded-xl border border-gray-300 px-4 py-2 flex items-center gap-2">
          <TbSearch className="text-gray-400" />
          <input
            type="text"
            className="bg-transparent w-full"
            placeholder="건물 또는 시설 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* <button
          type="button"
          className="flex justify-between items-center rounded-xl bg-white px-4 py-2 w-full text-left mb-2"
        >
          <span>주변 빈 강의실이 2개 있습니다!</span>
          <TbChevronRight className="text-gray-400" />
        </button> */}

        <div className="h-full overflow-y-auto scrollbar-hide">
          <div className="flex gap-4 items-center py-1">
            <div className="shrink-0 text-lg text-gray-600 font-semibold">
              건물
            </div>
            <hr className="w-full" />
          </div>

          <div className="flex flex-col gap-2">
            {buildings
              .filter(
                (b) =>
                  b.name.toLowerCase().includes(search.toLowerCase()) ||
                  b.number.toString().includes(search) ||
                  search === '',
              )
              .map((b) => {
                return (
                  <button
                    id={b.id.toString()}
                    type="button"
                    className="rounded-xl bg-white px-4 py-2 w-full text-left"
                    onClick={() => {
                      navigate(`/buildings/${b.id}`)
                    }}
                  >
                    <div className="font-semibold pb-0.5">{b.name}</div>
                    <div className="text-sm text-gray-500 font-light">
                      {b.number}
                    </div>
                  </button>
                )
              })}
          </div>

          <div className="flex gap-4 items-center py-1">
            <div className="shrink-0 text-lg text-gray-600 font-semibold">
              시설
            </div>
            <hr className="w-full" />
          </div>

          <div className="flex flex-col gap-2">
            {facilities
              .filter(
                (b) =>
                  b.name.toLowerCase().includes(search.toLowerCase()) ||
                  search === '',
              )
              .map((b) => {
                return (
                  <button
                    key={b.id}
                    id={b.id.toString()}
                    type="button"
                    className="rounded-xl bg-white px-4 py-2 w-full text-left"
                    onClick={() => {
                      navigate(`/facilities/${b.id}`)
                    }}
                  >
                    <div className="font-semibold pb-0.5">{b.name}</div>
                    <div className="text-sm text-gray-500 font-light">
                      {facilityTypes[b.facilityType]}
                    </div>
                  </button>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
