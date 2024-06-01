import { Facility } from '../types/facility'
import gs from '../assets/facilityImages/gs.jpg'
import { facilityTypes } from '../constants/facilities'
import {
  TbArrowCurveLeft,
  TbArrowCurveRight,
  TbArrowRampRight,
  TbCornerUpRight,
  TbLocation,
} from 'react-icons/tb'
import { AnimatePresence, motion } from 'framer-motion'

interface FacilityCardProps {
  facility: Facility
}

export default function FacilityCard({ facility }: FacilityCardProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className="absolute z-10 inset-x-0 bottom-0 border border-gray-200 flex justify-between bg-white rounded-t-3xl px-5 py-5"
      >
        <div className="">
          <div className="font-bold text-lg">{facility.name}</div>
          {facilityTypes[facility.facilityType]}
        </div>

        <button
          type="button"
          className="rounded-full bg-rose-500 h-12 w-12 flex items-center justify-center"
        >
          <TbCornerUpRight className="text-2xl text-white" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
