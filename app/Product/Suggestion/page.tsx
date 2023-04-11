'use client'
import { useState } from 'react'
import { GoBack } from 'components/GoBack'
import { FilterBox, HotelCardsGroup, Map } from 'modules/Product/Suggestion/components'

export default function Suggestion() {
  const [mode, setMode] = useState<boolean>(true)

  return (
    <div className="wrapper bg-page-color-2">
      <div className="pb-10">
        <GoBack />
        <p className='font-medium text-3xl mb-7'>
          Предложения
        </p>
        <FilterBox mode={mode} setMode={setMode} />
        {
          mode ? <HotelCardsGroup /> : <Map />
        }
      </div>
    </div>
  )
}
