import { useEffect } from 'react'
import { mapAtom } from '../atoms/map'
import { useAtom } from 'jotai'

export default function MapPage() {
  useEffect(() => {
    const { kakao } = window

    kakao.maps.load(async () => {
      /*
       * 맵 생성
       */
      let container = document.getElementById('map')!

      const [lat, lng] = [35.890639606489074, 128.61216248934815]

      let options = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 4,
      }

      let m = new kakao.maps.Map(container, options)

      let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    })
  }, [])

  return (
    <div className="h-full">
      <div id="map" className="w-full h-full" />
    </div>
  )
}
