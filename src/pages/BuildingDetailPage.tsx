import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import image from '../assets/buildingImages/it5.jpeg'
import axios from 'axios'
import urlJoin from 'url-join'
import { Building } from '../types/building'

import classNames from 'classnames'
import floorImages from '../assets/structureImages'

export default function BuildingsDetailPage() {
  const params = useParams()
  const [building, setBuilding] = useState<Building | null>(null)
  const [currentFloor, setCurrentFloor] = useState<string>('1층')

  const floors = ['지하 1층', '1층', '2층', '3층', '4층', '5층']

  useEffect(() => {
    axios
      .get(
        urlJoin(
          import.meta.env.VITE_BACKEND_URL,
          `/api/v1/buildings/${params.buildingId}`,
        ),
      )
      .then((r) => {
        setBuilding(r.data)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

  if (!building) {
    return (
      <div className="flex justify-center items-center text-rose-500 h-full">
        불러오는 중...
      </div>
    )
  }

  return (
    <div className="bg-gray-100/75 h-full">
      <img src={image} className="w-full h-60 object-cover shadow-md mb-6" />
      <div className="px-6 flex flex-col gap-2">
        <div className="flex flex-col items-center gap-1">
          <div className="text-2xl font-bold text-gray-800">
            {building.name}
          </div>
          <div className="text-lg font-light text-gray-800">
            {building.number}
          </div>
        </div>

        <hr className="my-2" />

        <div className="text-xl font-semibold py-2">구조도</div>
        <div className="flex flex-wrap gap-2 px-1">
          {floors.map((floor) => (
            <button
              key={floor}
              type="button"
              className={classNames(
                'border border-gray-200 text-sm px-2 py-1 rounded-lg',
                currentFloor === floor && 'bg-gray-200',
              )}
              onClick={() => setCurrentFloor(floor)}
            >
              {floor}
            </button>
          ))}
        </div>
        <img
          src={floorImages[floors.indexOf(currentFloor)]}
          className="object-cover h-60 px-1"
        />

        <div className="text-xl font-semibold py-2">시간표</div>
      </div>
    </div>
  )
}
