'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MyButton } from 'components/Button'
import { MyInput } from 'components/Input'
import { MySelect } from 'components/Select'

const activeClass = 'border-transparent bg-gray-400/25'

export const CalendarFilterBox = () => {
  const [activeItem, setActiveItem] = useState<string>('filter-date')

  const filterBtn = (name: string) => {
    setActiveItem(name)
  }

  return (
    <div className='filterBox rounded-xl bg-white p-5 mt-6'>
      <div className="flex items-center mb-3">
        <MyInput
          type='text'
          myClass='mr-2 py-3 px-3  bg-page-color-2 w-full placeholder:text-slate-500'
          placeholder='Поиск по названию объекта'
        />
        <MyButton
          className="bg-green-color h-full px-3 py-3 rounded"
          type="button"
          id="button-addon2"
        >
          <Image
            src='/search.svg'
            width='22'
            height='22'
            alt=''
          />
        </MyButton>
      </div>

      <div className='flex items-center mt-3  '>
        <div className='w-60'>
          <p className='font-medium flex items-center text-font-color m-0'>Сортировать объекты</p>
        </div>
        <div className="grid grid-cols-5 w-full">
          <div className={`${activeItem == 'filter-date' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  rounded-l-md  justify-center flex items-center p-2`} onClick={() => filterBtn('filter-date')}>
            <p className={`${activeItem == 'filter-date' ? 'text-slate-700' : 'text-gracolor'}`}>По дате добавления</p>
          </div>
          <div className={`${activeItem == 'filter-up-cost' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  flex items-center justify-center p-2`} onClick={() => filterBtn('filter-up-cost')}>
            <p className={`${activeItem == 'filter-up-cost' ? 'text-slate-600' : 'text-gray-color'}`}>По возрастанию цены</p>
          </div>
          <div className={`${activeItem == 'filter-down-cost' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  flex items-center justify-center p-2`} onClick={() => filterBtn('filter-down-cost')}>
            <p className={`${activeItem == 'filter-down-cost' ? 'text-slate-600' : 'text-gray-color'}`}>По убыванию цены</p>
          </div>
          <div className={`${activeItem == 'filter-comment' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  flex items-center justify-center p-2`} onClick={() => filterBtn('filter-comment')}>
            <p className={`${activeItem == 'filter-comment' ? 'text-slate-600' : 'text-gray-color'}`}>По отзывам гостей</p>
          </div>
          <div className={`${activeItem == 'filter-star' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  rounded-r-md flex items-center justify-center p-2`} onClick={() => filterBtn('filter-star')}>
            <p className={`${activeItem == 'filter-star' ? 'text-slate-600' : 'text-gray-color'}`}>Количество звёзд</p>
          </div>
        </div>
      </div>
      <p className='text-gray-color mt-6 mb-2'>Мои объекты</p>
      <div className='flex items-center'>
        <MySelect classNamePrefix='base-select' className='mr-4 w-[15rem]' placeholder='Все' />
        <MyButton
          className='bg-red-400 hover:bg-red-500 text-white py-2 px-10 rounded'
        >
          Сбросить
        </MyButton>
      </div>
    </div>
  )
}
