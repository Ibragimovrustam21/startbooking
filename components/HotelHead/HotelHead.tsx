'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const HotelHead = () => {
  const path = usePathname()
  const pathNameArr: string[] = path.split('/').slice(1)

  return (
    <div className="flex items-center justify-between">
      <div>
        <div className='flex items-center mb-2'>
          <div className="flex mr-2">
            <div className='pr-3 border-r border-gray-500/25 flex items-center'>
              <Image src='/star.svg' width='18' height='18' className='mr-1' alt='' />
              <Image src='/star.svg' width='18' height='18' className='mr-1' alt='' />
              <Image src='/star.svg' width='18' height='18' className='mr-1' alt='' />
              <Image src='/star.svg' width='18' height='18' className='mr-1' alt='' />
              <Image src='/star.svg' width='18' height='18' className='mr-1' alt='' />
            </div>
            <div className='flex items-center ml-1'>
              <Image src='/like.svg' width='18' height='18' className='mr-1' alt='' />
              <p className='text-blue-color font-medium ml-2 mb-0'>
                9.5
              </p>
            </div>
          </div>
          <p className='text-gray-400'>
            6 оценок от гостей
          </p>
        </div>
        <div className='flex items-center'>
          <p className='text-3xl font-medium'>
            HYATT Regency Tashkent
          </p>
          {pathNameArr && pathNameArr.map((item, idx) => {
            if (item === 'product' || item === 'advertisement') {
              return
            }

            return (
              <div className='flex items-center' key={idx}>
                <Image src='/arrowRightNotStick.svg' width='12' height='20' className='mx-3' alt='' />
                <p className="flex items-center text-3xl font-medium text-black-700 capitalize" key={item}>
                  {item}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      {
        pathNameArr && pathNameArr.map((item, idx) => {
          if (item == 'advertisement' || item == 'room') {
            return (
              <Link href='/product/favourites' key={idx}>
                <div className='flex justify-end' key={idx}>
                  <button className="text-base text-gray-500 border border-zinc-400 rounded-full px-5 py-3 ">
                    В избранное
                  </button>
                </div>
              </Link>
            )
          }
          return
        })
      }
    </div>
  )
}
