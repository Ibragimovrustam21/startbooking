'use client'
import { useState } from 'react'
import Image from 'next/image'
import { MySelect } from '../components/Select'
import { MyButton } from '../components/Button'
import { DatePicker } from '../components/DatePicker'
import { MyInput } from '../components/Input'
import { useTranslation } from 'react-i18next'
interface ISelectDiv {
  firstSelectDiv: boolean,
  secondSelectDiv: boolean
}

export default function HomePage() {
  const { t } = useTranslation('main');

  const selectDiv: ISelectDiv = {
    firstSelectDiv: false,
    secondSelectDiv: false
  }
  const [isActive, setIsActive] = useState(selectDiv)

  const myOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className='relative flex items-center justify-center h-screen w-full bg-home-back bg-no-repeat z-10 bg-cover bg-center'>
      <div className='absolute top-4 right-4'>
        <MyButton
          className="bg-blue-color text-white font-bold py-2 px-4 rounded flex items-center"
        >
          {t('register-your-object')}
          <svg fill="#fff" className='ml-2' width="18" height="18" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" ><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z"></path></svg>
        </MyButton>
      </div>
      <div className='bg-white mx-auto rounded-xl'>
        <div className='flex items-center'>
          <div
            className="w-48 border-r"
            onClick={() => setIsActive(selectDiv)}
          >
            <MySelect classNamePrefix='main-page-select-1' placeholder='Город / отель' options={myOptions} />
          </div>
          <div
            className="w-48 border-r"
            onClick={() => setIsActive(selectDiv)}
          >
            <MySelect classNamePrefix='main-page-select-2' placeholder='Тип аппартаментов' options={myOptions} />
          </div>
          <div
            className="w-48 relative px-3 h-full border-r cursor-pointer"
            onClick={() => setIsActive({ ...selectDiv, firstSelectDiv: !isActive.firstSelectDiv })}
          >
            <p className='text-font-color/75 text-sm py-2'>Дни пребывания</p>
            <div
              className={`${isActive.firstSelectDiv ? 'opacity-100' : 'opacity-0 '} transition-all duration-100 bg-white h-[10rem] w-48 absolute top-12 left-0 rounded p-3`}
              onClick={(e) => e.stopPropagation()}
            >
              <DatePicker />
            </div>
          </div>
          <div
            className="w-48 relative px-3 h-full cursor-pointer"
            onClick={() => setIsActive({ ...selectDiv, secondSelectDiv: !isActive.secondSelectDiv })}
          >
            <p className='text-font-color/75 text-sm py-2'>Количество гостей</p>
            <div
              className={`${isActive.secondSelectDiv ? 'opacity-100' : 'opacity-0 '} transition-all duration-100 bg-white h-[10rem] w-48 absolute top-12 left-0 rounded p-3`}
              onClick={(e) => e.stopPropagation()}
            >
              <p className='text-sm text-gray-500 mb-1'>
                Взрослые
              </p>
              <div className='flex items-center justify-between mb-2'>
                <MyInput maxLength={3} type='number' placeholder='0' myClass='w-1/4 border border-gray-300 bg-page-color-1 mr-2 py-1.5' />
                <MySelect classNamePrefix='base-select' className='w-3/4' placeholder='Гражданство' options={myOptions} />
              </div>
              <p className='text-sm text-gray-500 mb-1'>
                Дети
              </p>
              <div className='flex items-center'>
                <MyInput maxLength={3} type='number' placeholder='0' myClass='w-1/4 border border-gray-300 bg-page-color-1 mr-3 py-1.5 px-2' />
                <p className='min-w-fit text-gray-color text-sm'>
                  (дети до 12 лет)
                </p>
              </div>
            </div>
          </div>
          <MyButton className='bg-blue-color text-white py-2 px-2 w-auto rounded-r-md'>
            <Image src='/search.svg' width='22' height='22' alt='' />
          </MyButton>
        </div>
      </div>
    </div>
  )
}
