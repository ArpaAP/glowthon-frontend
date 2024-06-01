import { Facility } from '../types/facility'

export const facilityTypes = {
  TRASHCAN: '쓰레기통',
  BENCH: '벤치',
  VENDINGMACHINE: '자판기',
  ATM: 'ATM',
  CONVINIENCE: '편의점',
  PRINT: '인쇄소',
  RESTAURANT: '학식',
  CAFE: '카페',
  GROUND: '운동장',
  POND: '연못',
  READINGROOM: '독서실',
  PARKINGLOT: '주차장',
  GATE: '문',
  ETC: '기타시설',
}

const facilities: Facility[] = [
  {
    id: 1,
    name: '마쓰',
    positionType: 'OUTDOOR',
    buildingId: -1,
    facilityType: 'TRASHCAN',
    lat: 35.8876,
    lng: 128.6121,
  },
  {
    id: 2,
    name: '마쓰',
    positionType: 'OUTDOOR',
    buildingId: -1,
    facilityType: 'TRASHCAN',
    lat: 35.888,
    lng: 128.6099,
  },
  {
    id: 3,
    name: '공식당',
    positionType: 'INDOOR',
    buildingId: 26,
    facilityType: 'RESTAURANT',
    lat: 35.8883,
    lng: 128.6097,
  },
  {
    id: 4,
    name: '정보센터식당',
    positionType: 'INDOOR',
    buildingId: 12,
    facilityType: 'RESTAURANT',
    lat: 35.8924,
    lng: 128.6132,
  },
  {
    id: 5,
    name: '축구장',
    positionType: 'OUTDOOR',
    buildingId: -1,
    facilityType: 'GROUND',
    lat: 35.888,
    lng: 128.6066,
  },
  {
    id: 6,
    name: '야구장',
    positionType: 'OUTDOOR',
    buildingId: -1,
    facilityType: 'GROUND',
    lat: 35.888,
    lng: 128.605,
  },
  {
    id: 7,
    name: 'GS25경북대도서관점',
    positionType: 'INDOOR',
    buildingId: 27,
    facilityType: 'CONVINIENCE',
    lat: 35.8905,
    lng: 128.6121,
  },
  {
    id: 8,
    name: 'GS25글로벌플라자점',
    positionType: 'INDOOR',
    buildingId: 18,
    facilityType: 'CONVINIENCE',
    lat: 35.892,
    lng: 128.6115,
  },
  {
    id: 9,
    name: '일청담',
    positionType: 'OUTDOOR',
    buildingId: -1,
    facilityType: 'POND',
    lat: 35.8886,
    lng: 128.6121,
  },
  {
    id: 10,
    name: '도서관CAFE',
    positionType: 'INDOOR',
    buildingId: 19,
    facilityType: 'CAFE',
    lat: 35.892,
    lng: 128.6126,
  },
  {
    id: 11,
    name: '글로벌플라자CAFE',
    positionType: 'INDOOR',
    buildingId: -1,
    facilityType: 'CAFE',
    lat: 35.8918,
    lng: 128.6114,
  },
  {
    id: 12,
    name: 'GS25경북대생활관점',
    positionType: 'INDOOR',
    buildingId: 28,
    facilityType: 'CONVINIENCE',
    lat: 35.8869,
    lng: 128.6094,
  },
  {
    id: 13,
    name: '생활관CAFE',
    positionType: 'INDOOR',
    buildingId: 28,
    facilityType: 'CAFE',
    lat: 35.8869,
    lng: 128.6095,
  },
  {
    id: 14,
    name: '지도못',
    positionType: 'OUTDOOR',
    buildingId: -1,
    facilityType: 'POND',
    lat: 35.8881,
    lng: 128.6095,
  },
  {
    id: 15,
    name: '오도',
    positionType: 'OUTDOOR',
    buildingId: 25,
    facilityType: 'READINGROOM',
    lat: 35.8873,
    lng: 128.6116,
  },
  {
    id: 16,
    name: '주차장',
    positionType: 'OUTDOOR',
    buildingId: -1,
    facilityType: 'PARKINGLOT',
    lat: 35.8872,
    lng: 128.6127,
  },
]

export default facilities
