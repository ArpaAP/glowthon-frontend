import classNames from 'classnames'
import { TbMap } from 'react-icons/tb'

interface BottomNavbarButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  label: string
  active?: boolean
}

export default function BottomNavbarButton({
  icon,
  label,
  active,
  ...props
}: BottomNavbarButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        'flex flex-col items-center gap-1',
        active ? 'text-rose-500' : 'text-gray-500',
      )}
      {...props}
    >
      <div className="text-2xl">{icon}</div>
      <div className="text-sm">{label}</div>
    </button>
  )
}
