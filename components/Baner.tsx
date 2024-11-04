"use client"

import Image from 'next/image'
import React from 'react'

const Baner = () => {
  return (
    <div className="h-full w-3/5">
      <Image src="/baner.jpg" width={900} height={400} alt='baner' className="w-full p-10" />
    </div>
  )
}

export default Baner
