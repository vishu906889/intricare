import React from 'react'

const CustomIcon = ({ 
  size = 24, 
  color = 'currentColor', 
  strokeWidth = 2, 
  children, 
  viewBox = '0 0 24 24',
  className = '',
  ...props 
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  )
}

export default CustomIcon
