import { IconProps } from '../types'

export default function RecordIcon({ 
  active = false, 
  size = 24, 
  darkMode = false,
  className = ''
}: IconProps) {
  const color = active 
    ? (darkMode ? '#D97D54' : '#C25E40')
    : (darkMode ? '#E2E8F0' : '#1B222E')
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M8 9h8M8 13h8M8 17h5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}




