import React from 'react'
import { link } from 'react-router-dom'

export default function Navbariot() {
  return (
    <div className='flex justify-center gap-5 p-5 bg-blue-700 text-white'>
        <link to="/pageA">หน้า A</link>
        <link to="/pageB">หน้า B</link>
        <link to="/pageC">หน้า C</link>
        <link to="/pageD">หน้า D</link>
    </div>
  )
}
