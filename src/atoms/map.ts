import { atom, useAtom } from 'jotai'

export const mapAtom = atom<kakao.maps.Map | null>(null)
