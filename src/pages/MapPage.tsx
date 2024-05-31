import { useEffect, useState } from 'react'
import {
  TbMenu2,
  TbShoppingBag,
  TbBuildingStore,
  TbPrinter,
  TbCash,
  TbCoffee,
  TbTrash,
} from 'react-icons/tb'
import { IndoorFacility, OutdoorFacility } from '../types/facility'
import { indoorFacilities, outdoorFacilities } from '../constants/facilities'

export default function MapPage() {
  const [map, setMap] = useState<null | kakao.maps.Map>(null)
  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([])

  useEffect(() => {
    const { kakao } = window

    kakao.maps.load(async () => {
      let container = document.getElementById('map')!

      const [lat, lng] = [35.890639606489074, 128.61216248934815]

      let options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 4,
      }

      let m = new kakao.maps.Map(container, options)

      setMap(m)
    })
  }, [])

  const handleCategoryClick = (
    type: OutdoorFacility['type'] | IndoorFacility['type'],
  ) => {
    const { kakao } = window

    if (!kakao) return

    const facilities = [...outdoorFacilities, ...indoorFacilities]

    markers.forEach((marker) => {
      marker.setMap(null)
    })

    const newMarkers = facilities
      .filter((facility) => facility.type === type)
      .map((facility) => {
        return new kakao.maps.Marker({
          position: new kakao.maps.LatLng(facility.lat, facility.lng),
        })
      })

    newMarkers.forEach((marker) => {
      marker.setMap(map)
    })

    setMarkers(newMarkers)

    const bounds = new kakao.maps.LatLngBounds()

    newMarkers.forEach((marker) => {
      bounds.extend(marker.getPosition())
    })

    map?.setBounds(bounds)

    return () => {
      newMarkers.forEach((marker) => {
        marker.setMap(null)
      })
    }
  }

  return (
    <div className="h-full relative">
      <div className="absolute top-3 inset-x-3 z-[99999]">
        <div className="bg-white flex gap-3 items-center px-3 py-2.5 shadow-md rounded-xl">
          <button type="button" className="p-1">
            <TbMenu2 className="text-xl text-gray-400" />
          </button>
          <button
            type="button"
            className="text-gray-400 font-light w-full text-left"
          >
            시설물 또는 건물 검색...
          </button>
        </div>

        <div className="flex flex-nowrap gap-2 py-2 overflow-x-auto scrollbar-hide">
          <button
            type="button"
            className="flex items-center gap-1 shrink-0 bg-white rounded-full shadow-md px-2.5 py-1 text-sm font-light"
            onClick={() => {
              handleCategoryClick('CONVINIENCE')
            }}
          >
            <TbShoppingBag strokeWidth={1.5} />
            편의점
          </button>

          <button
            type="button"
            className="flex items-center gap-1 shrink-0 bg-white rounded-full shadow-md px-2.5 py-1 text-sm font-light"
            onClick={() => {
              handleCategoryClick('RESTAURANT')
            }}
          >
            <TbBuildingStore strokeWidth={1.5} />
            학식
          </button>

          <button
            type="button"
            className="flex items-center gap-1 shrink-0 bg-white rounded-full shadow-md px-2.5 py-1 text-sm font-light"
            onClick={() => {
              handleCategoryClick('PRINT')
            }}
          >
            <TbPrinter strokeWidth={1.5} />
            인쇄소
          </button>

          <button
            type="button"
            className="flex items-center gap-1 shrink-0 bg-white rounded-full shadow-md px-2.5 py-1 text-sm font-light"
            onClick={() => {
              handleCategoryClick('ATM')
            }}
          >
            <TbCash strokeWidth={1.5} />
            ATM
          </button>

          <button
            type="button"
            className="flex items-center gap-1 shrink-0 bg-white rounded-full shadow-md px-2.5 py-1 text-sm font-light"
            onClick={() => {
              handleCategoryClick('CAFE')
            }}
          >
            <TbCoffee strokeWidth={1.5} />
            카페
          </button>

          <button
            type="button"
            className="flex items-center gap-1 shrink-0 bg-white rounded-full shadow-md px-2.5 py-1 text-sm font-light"
            onClick={() => {
              handleCategoryClick('TRASHCAN')
            }}
          >
            <TbTrash strokeWidth={1.5} />
            쓰레기통
          </button>
        </div>
      </div>

      <div id="map" className="w-full h-full" />
    </div>
  )
}
