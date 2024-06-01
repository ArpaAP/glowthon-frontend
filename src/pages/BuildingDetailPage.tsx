import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function BuildingsDetailPage() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  return (
    <div className="bg-gray-100/75 h-full">
      <div className="px-6 py-8 flex flex-col gap-2">
        <div className="flex items-center gap-2 pb-6">
          <div className="text-xl font-bold text-gray-800">주변</div>
        </div>
      </div>
    </div>
  )
}
