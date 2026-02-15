import { IconProps } from '../types'

export default function ShareIcon({ 
  size = 20, 
  darkMode = false,
  className = ''
}: Omit<IconProps, 'active'>) {
  const color = darkMode ? '#E2E8F0' : '#1B222E'
  
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 20 20" 
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="15" cy="5" r="2.5" stroke={color} strokeWidth="1.5" />
      <circle cx="5" cy="10" r="2.5" stroke={color} strokeWidth="1.5" />
      <circle cx="15" cy="15" r="2.5" stroke={color} strokeWidth="1.5" />
      <path
        d="M7.3 11.3l5.4 2.4M12.7 6.3l-5.4 2.4"
        stroke={color}
        strokeWidth="1.5"
      />
    </svg>
  )
}





