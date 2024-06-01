import { useEffect, useState } from 'react'
import {
  TbMenu2,
  TbBuildingStore,
  TbPrinter,
  TbCash,
  TbCoffee,
  TbTrash,
  TbLibrary,
  TbBooks,
} from 'react-icons/tb'
import { Facility } from '../types/facility'
import facilities from '../constants/facilities'
import { renderToStaticMarkup } from 'react-dom/server'

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

  const handleCategoryClick = (facilityType: Facility['facilityType']) => {
    const { kakao } = window

    if (!kakao) return

    markers.forEach((marker) => {
      marker.setMap(null)
    })

    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })

    const newMarkers = facilities
      .filter((facility) => facility.facilityType === facilityType)
      .map((facility) => {
        let marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(facility.lat, facility.lng),
        })

        kakao.maps.event.addListener(marker, 'mouseover', () => {
          infowindow.setContent(
            renderToStaticMarkup(
              <div className="p-2 text-sm flex">{facility.name}</div>,
            ),
          )
          infowindow.open(map!, marker)
        })

        kakao.maps.event.addListener(marker, 'mouseout', () => {
          infowindow.close()
        })

        return marker
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
          {[
            ['CONVINIENCE', TbBuildingStore, '편의점'],
            ['RESTAURANT', TbBuildingStore, '학식'],
            ['PRINT', TbPrinter, '인쇄소'],
            ['READINGROOM', TbBooks, '독서실'],
            ['ATM', TbCash, 'ATM'],
            ['CAFE', TbCoffee, '카페'],
            ['TRASHCAN', TbTrash, '쓰레기통'],
          ].map(([facilityType, Icon, text]) => {
            return (
              <button
                key={facilityType as string}
                type="button"
                className="flex items-center gap-1 shrink-0 bg-white rounded-full shadow-md px-2.5 py-1 text-sm font-light"
                onClick={() => {
                  console.log(facilityType)
                  handleCategoryClick(facilityType as Facility['facilityType'])
                }}
              >
                <Icon strokeWidth={1.5} />
                {text as string}
              </button>
            )
          })}
        </div>
      </div>

      <div id="map" className="w-full h-full" />
    </div>
  )
}
