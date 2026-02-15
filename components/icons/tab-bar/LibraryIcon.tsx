import { IconProps } from '../types'

export default function LibraryIcon({ 
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
      <path
        d="M4 19.5A2.5 2.5 0 016.5 17H20"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
        stroke={color}
        strokeWidth="1.5"
      />
      <path
        d="M10 6v8l2-1.5L14 14V6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}





