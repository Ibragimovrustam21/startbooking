'use client'
import Image from 'next/image'
import HotelRoom from 'assets/hotelImage.png'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CardCarousel } from 'components/CardCarousel'

export const RoomCard = () => {
  const path = usePathname()
  return (

    <div className="room-card border rounded-xl bg-white p-4 mt-3">
      <p className='font-medium text-font-color text-2xl mb-2'>
        Двухместный люкс
      </p>
      <p className='text-gray-color mb-3'>
        HYATT Regency Tashkent
      </p>
      <div className=' overflow-hidden mb-3'>
        <CardCarousel />
      </div>
      <Link href='/product/select-room/room'>
        <p className='text-gray-color mb-1'>
          Описание номера:
        </p>
        <p className='text-font-color mb-3'>
          Двухместный люкс на 3-ем этаже с отличным видом на центр города из балкона. В номере присутствует большая ...
        </p>
        <p className='text-gray-color mb-1'>
          Стоимость проживания:
        </p>
        <p className='text-3xl mb-4 mr-2'>
          75$ в сутки <span className='text-sm text-gray-color'>доп. 20% НДС</span>
        </p>
        {
          path === '/product/booking'
            ? <p className='text-blue-color text-center cursor-pointer'> Читать полностью</p>
            : <p className='flex items-center justify-center text-orange-400 cursor-pointer'>
              <Image
                src='/lock.svg'
                className='mr-2'
                width='12'
                height='14'
                alt=''
              />
              Бронировать
            </p>
        }
      </Link>
    </div>

  )
}
