import React from 'react'

const Footer = () => {
    const date= new Date()
    const year= date.getFullYear()
  return (
    <p className='text-center'>© {year}, All Right Reserved. </p>
  )
}

export default Footer