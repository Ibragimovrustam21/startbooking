'use client'
import Advertisement from 'app/Product/Advertisement/page'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Room() {
  const path = usePathname()
  const selectedRoom = (path === '/product/seslect-room/room')

  return (
    <>
      <Advertisement selectedRoom={selectedRoom} />
    </>
  )
}
