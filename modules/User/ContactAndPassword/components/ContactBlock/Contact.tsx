'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MyInput } from 'components/Input'
import { MySelect } from 'components/Select'
import { MyNumberInput } from 'components/Input/MyNumberInput'

export const Contact = () => {
  return (
    <>
      <div className="bg-white rounded-xl p-5">
        <p className='text-font-color font-semibold text-2xl my-5'>
          Контактные данные
        </p>
        <div className='mb-5 mr-2 w-full'>
          <p className="mb-2 text-gray-color text-sm">
            Номер телефона
          </p>
          <MyNumberInput
            type="number"
            placeholder="8 90 799 85 55"
            myClass="py-2 border w-full"
          />
        </div>
        <div className='mb-5 mr-2 w-full'>
          <p className="mb-2 text-gray-color text-sm">
            Дополнительный номер телефона
          </p>
          <MyInput
            type="number"
            placeholder="8 90 799 85 55"
            myClass="py-2 border w-full"
          />
        </div>
        <div className='mb-5 mr-2 w-full'>
          <p className="mb-2 text-gray-color text-sm">
            Электронная почта
          </p>
          <MyInput
            type="email"
            placeholder="Например start@booking.com"
            myClass="py-2 border w-full"
          />
        </div>
        <div className='mb-5 mr-2 w-full'>
          <p className="mb-2 text-gray-color text-sm">
            Предпочтительный способ связи
          </p>
          <MySelect
            placeholder='Мессенджеры'
            classNamePrefix='base-select border'
          />
        </div>
      </div>
      <div className="bg-white rounded-xl p-5 mt-5">
        <p className='text-font-color font-semibold text-2xl my-4'>
          Социальные сети
        </p>
        <div className="social__icon--box flex mt-5">
          <Link href='#' className='mr-4'>
            <div className="h-10 w-10 rounded-lg bg-twitter flex items-center justify-center">
              <Image src='/twitter.svg' width='13' height='16' alt='' />
            </div>
          </Link>
          <Link href='#' className='mr-4'>
            <div className="h-10 w-10 rounded-lg bg-youtube flex items-center justify-center">
              <Image src='/youtube.svg' width='19' height='16' alt='' />
            </div>
          </Link>
          <Link href='#' className='mr-4'>
            <div className="h-10 w-10 rounded-lg bg-facebook flex items-center justify-center">
              <Image src='/facebook.svg' width='7' height='16' alt='' />
            </div>
          </Link>
          <Link href='#' className='mr-4'>
            <div className="h-10 w-10 rounded-lg bg-instagram flex items-center justify-center">
              <Image src='/instagram.svg' width='15' height='16' alt='' />
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
