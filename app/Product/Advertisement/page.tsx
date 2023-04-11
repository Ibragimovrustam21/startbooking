'use client'
import { Carousel } from 'components/Carousel'
import { useState } from 'react'
import { GoBack } from 'components/GoBack'
import { HotelHead } from 'components/HotelHead'
import { InfoAboutHotelOrRoom, Map } from 'modules/Product/Advertisement/components'

interface IAdvertisement {
  selectedRoom: boolean
}

export default function Advertisement({ selectedRoom }: IAdvertisement) {
  const [mode, setMode] = useState<boolean>(true)

  return (
    <div className="wrapper bg-page-color-1">
      <GoBack />
      <HotelHead />
      {
        mode ? <Carousel /> : <Map />
      }
      <InfoAboutHotelOrRoom mode={mode} setMode={setMode} selectedRoom={selectedRoom} />
    </div>
  )
}
