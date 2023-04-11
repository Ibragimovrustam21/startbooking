'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import User from 'assets/user.jpg'

export const ProfileCard = () => {
  const [readerResult, setReaderResult] = useState<any>('')
  const path = usePathname().split('/').slice(1)
  const isActiveLink = path.find(e => e === (path[1] && path[1] || ''))

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    const selectedFiles = files as FileList;

    let reader = new FileReader()
    reader.readAsDataURL(selectedFiles?.[0])
    reader.onload = () => {
      setReaderResult(reader.result)
    }
  }
  return (
    <div className='bg-white rounded-xl p-4 min-w-[25rem] shadow-md'>
      <div className='flex flex-col items-center border-b py-3'>
        <label className='h-28 w-28 block border rounded-full bg-gray cursor-pointer overflow-hidden' htmlFor='upload-image'>
          {
            readerResult
              ? <img src={readerResult} alt='' className='object-cover h-28 w-28' />
              : <Image src={User} alt='' />
          }
        </label>
        <input type='file' onChange={e => handlerChange(e)} className='hidden' id='upload-image' />
        <p className='font-semibold text-2xl text-font-color my-3'>
          Джессика Васкес
        </p>
        <p className='text-lg text-gray-400'>
          Предпочтительно мессенджеры
        </p>
      </div>
      <div className='flex items-center justify-between px-10 py-5 border-b pb-4'>
        <div className='text-center'>
          <p className='text-xl font-semibold my-2'>
            23
          </p>
          <p className='text-gray-color text-sm'>
            Посещений <br /> объектов
          </p>
        </div>
        <div className='text-center'>
          <p className='text-xl font-semibold my-2'>
            12
          </p>
          <p className='text-gray-color text-sm'>
            Отзывов по <br /> объектам
          </p>
        </div>
        <div className='text-center'>
          <p className='text-xl font-semibold my-2 flex items-center justify-center'>
            9.5
            <Image
              src='/blackstar.svg'
              alt='star'
              width={11}
              height={10}
            />
          </p>
          <p className='text-gray-color text-sm'>
            Впечатление <br /> от отдыха
          </p>
        </div>
      </div>
      <p className='text-gray-500 text-lg text-center my-7'>
        Настройки аккаунта
      </p>
      <div className='text-center'>
        <ul className='m-0 p-0 list-none'>
          <li className='mb-2'>
            <Link href='/user/personal-information' className={`${isActiveLink === 'personal-information' ? 'text-blue-color' : 'text-font-color'} text-lg `}>Личная информация</Link>
          </li>
          <li className='mb-2'>
            <Link href='/user/payment' className={`${isActiveLink === 'payment' ? 'text-blue-color' : 'text-font-color'} text-lg`}>Платежи и выплаты</Link>
          </li>
          <li className='mb-2'>
            <Link href='/user/notification' className={`${isActiveLink === 'notification' ? 'text-blue-color' : 'text-font-color'} text-lg`}>Уведомления</Link>
          </li>
          <li className='mb-2'>
            <Link href='/user/contact-and-password' className={`${isActiveLink === 'contact-and-password' ? 'text-blue-color' : 'text-font-color'} text-lg`}>Контакты и пароли</Link>
          </li>
          <li className='mb-2'>
            <Link href='/user/logout' className='text-red-400 text-lg '>Выход</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
