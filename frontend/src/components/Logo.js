import React from 'react'
import logoImage from '../assest/logo512.jpg' // Using your exact folder name 'assest'

const Logo = ({ className = "h-10 w-auto object-contain" }) => {
  return (
    <img 
      src={logoImage} 
      alt="Shop Logo" 
      className={className}
    />
  )
}

export default Logo