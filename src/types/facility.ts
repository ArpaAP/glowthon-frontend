export interface OutdoorFacility {
  id: number
  name: string
  type: 'TRASHCAN' | 'BENCH' | 'VENDINGMACHINE' | 'ATM' | 'ETC'
  lat: number
  lng: number
  note?: string | null
}

export interface IndoorFacility {
  id: number
  buildingId: number
  name: string
  type: 'CONVINIENCE' | 'PRINT' | 'RESTAURANT' | 'CAFE' | 'ETC'
  lat: number
  lng: number
  note?: string | null
}
