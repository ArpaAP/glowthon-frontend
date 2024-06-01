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
  TbLocation,
  TbCornerUpRight,
} from 'react-icons/tb'
import { Facility } from '../types/facility'
import { renderToStaticMarkup } from 'react-dom/server'
import { Building } from '../types/building'
import axios from 'axios'
import urlJoin from 'url-join'
import FacilityCard from '../components/FacilityCard'
import NavigateCard from '../components/NavigateCard'

export default function MapPage() {
  const [map, setMap] = useState<null | kakao.maps.Map>(null)
  const [markers, setMarkers] = useState<kakao.maps.Marker[]>([])
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(
    null,
  )

  const [from, setFrom] = useState<Building | Facility | null>(null)
  const [to, setTo] = useState<Building | Facility | null>(null)
  const [showNavigate, setShowNavigate] = useState(false)

  const [showPath, setShowPath] = useState(false)

  useEffect(() => {
    axios
      .get(urlJoin(import.meta.env.VITE_BACKEND_URL, '/api/v1/facilities'))
      .then((r) => {
        setFacilities(r.data)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [])

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

      const getLocationAsync = (options?: PositionOptions) => {
        return new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, options)
        })
      }

      const { coords } = await getLocationAsync()

      let currentLocationCircle = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(coords.latitude, coords.longitude),
        radius: 50,
        strokeWeight: 1,
        strokeColor: '#000',
        strokeOpacity: 0.3,
        strokeStyle: 'solid',
        fillColor: '#ff0000',
        fillOpacity: 0.5,
      })

      currentLocationCircle.setMap(m)

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

        kakao.maps.event.addListener(marker, 'click', () => {
          setSelectedFacility(facility)
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

  const handleNavigate = () => {
    const { kakao } = window

    if (!kakao) return

    var polyline = new kakao.maps.Polyline({
      map: map!,
      path: [
        new kakao.maps.LatLng(35.888052627940525, 128.61137638921986),
        new kakao.maps.LatLng(35.88832128824555, 128.61116589139206),
        new kakao.maps.LatLng(35.88857690178667, 128.6115918827895),
        new kakao.maps.LatLng(35.88933448685457, 128.6122163136547),
        new kakao.maps.LatLng(35.89107583597261, 128.61339781852394),
        new kakao.maps.LatLng(35.8911881499279, 128.61342224641191),
        new kakao.maps.LatLng(35.89131777044683, 128.6131646289559),
        new kakao.maps.LatLng(35.891445116603876, 128.61274084857334),
      ],
      strokeWeight: 5,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeStyle: 'solid',
    })

    setShowPath(true)
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

      {selectedFacility && <FacilityCard facility={selectedFacility} />}

      <NavigateCard
        from={from ? facilities.find((f) => f.id === from.id) || null : null}
        to={to ? facilities.find((f) => f.id === to.id) || null : null}
        setFrom={(from) => {
          setFrom(from)
        }}
        setTo={(to) => {
          setTo(to)
        }}
        show={showNavigate}
        onClose={() => setShowNavigate(false)}
        onSubmit={() => handleNavigate()}
      />

      <button
        type="button"
        className="absolute right-4 bottom-8 z-[9] bg-rose-500 text-white flex justify-center items-center shadow-lg h-14 w-14 rounded-full"
        onClick={() => {
          setShowNavigate(true)
        }}
      >
        <TbCornerUpRight className="text-3xl" />
      </button>
    </div>
  )
}
