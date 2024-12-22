import React, { Children } from 'react'

function Button({
    Children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
   <button className = {`px-2 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} 
   {...props}  >
  {Children}
   </button>
  )
}

export default Button()