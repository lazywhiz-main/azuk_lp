import { ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps {
  children: ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary',
  className = '',
  onClick,
  type = 'button',
  disabled = false
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-lg transition-all duration-200'
  const variantClasses = {
    primary: 'bg-primary text-surface shadow-md hover:-translate-y-0.5 hover:shadow-lg active:scale-95',
    secondary: 'bg-surface text-primary border-2 border-primary hover:bg-primary hover:text-surface'
  }
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`
  
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }
  
  return (
    <button 
      type={type}
      onClick={onClick} 
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

