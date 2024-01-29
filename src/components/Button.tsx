import React from 'react'

const Button = ({styles}:{styles:string}) => {
  return (
    <button type='button' className={`py-4 px-6 bg-blue-gradient ${styles} font-poppins outline-none text-primary text-[18px] rounded-md`}>
      Get Started
    </button>
  )
}

export default Button
