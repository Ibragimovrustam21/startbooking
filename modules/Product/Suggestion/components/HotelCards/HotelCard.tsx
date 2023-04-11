'use client'
import Image from 'next/image'
import hotelImage from 'assets/hotelImage.png'
import { usePathname } from 'next/navigation'
import { CardCarousel } from 'components/CardCarousel'
import Link from 'next/link'

export const HotelCard = () => {
  const path = usePathname()

  return (
    <div className='bg-white rounded-xl p-4'>
      <p className='mb-3 text-2xl text-font-color'>HYATT Regency Tashkent</p>
      <div className=" rounded-md mb-5" onClick={e => e.stopPropagation()}>
        <CardCarousel />
      </div>
      <Link href='/product/advertisement'>
        <div className='card__reaction flex items-center mb-3'>
          <div className="flex mr-2">
            <div className='pr-3 border-r border-gray-500/25 flex items-center'>
              <Image
                src='/grade-star.svg'
                className='mr-1'
                width='18'
                height='18'
                alt=''
              />
              <p className='text-orange-300 font-medium ml-1 m-0'>3.5</p>
            </div>
            <div className='flex items-center ml-1'>
              <Image
                src='/like.svg'
                className='mr-1'
                width='18'
                height='18'
                alt=''
              />
              <p className='text-blue-color font-medium m-0 ml-2'>9.5</p>
            </div>
          </div>
          <p className='text-gray-400'>6 оценок от гостей</p>
        </div>
        <p className='text-gray-400 mb-1'>Ориентир:</p>
        <p className='tetx-font-color'>2 км от Чарвакское водохранилище</p>
        <p className='text-center my-4 text-3xl'>75$ в сутки</p>
      </Link>
      {
        path === '/product/favourites' && <p className='flex items-center justify-center text-base text-red-400 cursor-pointer mt-2'>
          <Image
            src='/crash.svg'
            className='mr-2'
            width='9'
            height='12'
            alt=''
          />
          Убрать с избранного
        </p>
      }
    </div>
  )
}
