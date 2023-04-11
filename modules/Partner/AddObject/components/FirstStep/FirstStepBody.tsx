'use client'
import { MySelect } from 'components/Select'

export const FirstStepBody = () => {
  return (
    <div className='grid grid-cols-5 gap-4 mt-8'>
      <div>
        <p className='text-font-color font-medium text-lg'>Выбор типа объекта</p>
      </div>
      <div className='col-span-3 flex items-center flex-wrap justify-between'>
        <div className='w-[49%] mb-4  bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>1. Гостиницы</p>
          <p className='text-font-color mb-4'>Отели, гостевые дома, хостелы, отели типа “постель и завтрак” и прочее</p>
          <p className='text-gray-color mb-2'>Тип</p>
          <MySelect classNamePrefix='base-select' placeholder='Выберите' />
        </div>
        <div className='w-[49%] mb-4 bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>2. Дома и дачи</p>
          <p className='text-font-color mb-4'>Аппартаменты, дома для отпуска, виллы, дачи и прочее</p>
          <p className='text-gray-color mb-2'>Тип</p>
          <MySelect classNamePrefix='base-select' placeholder='Выберите' />
        </div>
        <div className='w-[49%] mb-4  bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>3. Одни аппартаменты</p>
          <p className='text-font-color mb-4'>Одни аппартаменты, которые можно забронировать целиком</p>
          <p className='text-gray-color mb-2'>Тип</p>
          <MySelect classNamePrefix='base-select' placeholder='Выберите' />
        </div>
        <div className='w-[49%] mb-4 bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>4. Альтернативные объекты</p>
          <p className='text-font-color mb-4'>Ботели, кемпинги, люкс-шатры, территории парков и прочее</p>
          <p className='text-gray-color mb-2'>Тип</p>
          <MySelect classNamePrefix='base-select' placeholder='Выберите' />
        </div>
      </div>
    </div>
  )
}
