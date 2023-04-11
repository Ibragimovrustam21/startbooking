import Image from 'next/image'
import { HotelCard } from '../hotel-cards/HotelCard'
import MapImage from 'assets/map.png'

export const Map = () => {
  return (
    <div className='mt-5'>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <div className='p-3 bg-white rounded-lg' >
            <p className='text-3xl mb-4'>Карта</p>
            <Image
              src={MapImage}
              className='rounded-lg w-full'
              alt='map'
            />
          </div>
        </div>
        <div className="">
          <HotelCard />
        </div>
      </div>
    </div>
  )
}
