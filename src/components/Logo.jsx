import React from 'react'

const Logo = ({ size = 32, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="40" height="40" rx="8" fill="#4F46E5" />
      <path
        d="M20 10L28.6603 25H11.3397L20 10Z"
        fill="white"
      />
      <circle cx="20" cy="22" r="4" fill="#4F46E5" />
    </svg>
  )
}

export default Logo
