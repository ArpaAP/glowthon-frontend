import { AnimatePresence, motion } from 'framer-motion'
import { TbChevronDown, TbCornerUpRight } from 'react-icons/tb'
import { facilityTypes } from '../constants/facilities'
import { Building } from '../types/building'
import { Facility } from '../types/facility'

interface NavigateCardProps {
  from: Building | Facility | null
  to: Building | Facility | null
  setFrom: (from: Building | Facility) => void
  setTo: (to: Building | Facility) => void
  show: boolean
  onClose: () => void
  onSubmit: (from: Building | Facility, to: Building | Facility) => void
}

export default function NavigateCard({
  from,
  to,
  setFrom,
  setTo,
  show,
  onClose,
  onSubmit,
}: NavigateCardProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute z-10 inset-x-0 bottom-0 border border-gray-200 flex flex-col items-center gap-2 bg-white rounded-t-3xl px-5 py-4"
        >
          <button
            type="button"
            className="w-full flex justify-center pb-1"
            onClick={onClose}
          >
            <TbChevronDown className="text-xl" />
          </button>

          <div className="flex gap-2 items-center w-full">
            <div className="text-base shrink-0">출발:</div>
            <button
              type="button"
              className="text-left bg-gray-100 text-gray-500 rounded-xl w-full px-2 py-2"
            >
              {from ? from.name : '출발지를 선택해주세요'}
            </button>
          </div>

          <div className="flex gap-2 items-center w-full">
            <div className="text-base shrink-0">도착:</div>
            <button
              type="button"
              className="text-left bg-gray-100 text-gray-500 rounded-xl w-full px-2 py-2"
            >
              {to ? to.name : '도착지를 선택해주세요'}
            </button>
          </div>

          <button
            type="button"
            className="bg-rose-500 text-white w-full py-1.5 rounded-xl my-1 shadow"
            onClick={() => {
              onSubmit(from as Building | Facility, to as Building | Facility)
            }}
          >
            길찾기
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
