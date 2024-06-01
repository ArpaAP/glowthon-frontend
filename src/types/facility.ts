export interface Facility {
  id: number
  buildingId: number
  positionType: 'INDOOR' | 'OUTDOOR'
  name: string
  facilityType:
    | 'TRASHCAN'
    | 'BENCH'
    | 'VENDINGMACHINE'
    | 'ATM'
    | 'CONVINIENCE'
    | 'PRINT'
    | 'RESTAURANT'
    | 'CAFE'
    | 'GROUND'
    | 'POND'
    | 'READINGROOM'
    | 'PARKINGLOT'
    | 'GATE'
    | 'ETC'
  lat: number
  lng: number
  note?: string | null
}
