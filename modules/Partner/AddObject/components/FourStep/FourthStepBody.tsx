'use client'
import { MyButton } from "components/Button"
import { MySelect } from "components/Select"

export const FourthStepBody = () => {
  return (
    <div className='grid grid-cols-5 gap-4 mt-8'>
      <div>
        <p className='text-font-color font-medium text-lg'>Порядок проживания</p>
      </div>
      <div className='col-span-3 flex flex-wrap justify-between'>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>1. Отмена бронирований</p>
          <div className="flex justify-between">
            <div>
              <p className='w-3/4 text-gray-color mb-4'>
                За сколько дней гости могут отменить бронирование бещ уплаты штрафа?
              </p>
              <MySelect classNamePrefix='base-select' className="w-1/2" placeholder='В день заезда (18:00)' />
            </div>
            <div>
              <p className='w-full text-gray-color mb-4'>
                или гостям будет необзодимо оплатить
              </p>
              <MySelect classNamePrefix='base-select' className="w-full" placeholder='100% от полной стоимости' />
            </div>
          </div>

        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>2. Защита от случайных бронирований</p>
          <p className='w-full text-gray-color mb-4'>
            Чтобы сэкономить вам время на обработку случайных бронирований, мы автоматически освобождаем от штрафа гостей,
            отменяющих бронирование в течении 24  часов с момента его совершения.
          </p>
          <div className="flex">
            <MyButton className="bg-green-color text-white mr-4 p-3 px-20 rounded-md">
              Включить
            </MyButton>
            <MyButton className="bg-page-color-2 text-gray-color  p-3 px-20 rounded-md">
              Не нужно
            </MyButton>
          </div>
        </div>
        <div className='w-[49%] mb-4  bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>3. Регистрация заезда</p>
          <p className='text-gray-color mb-2'>c:</p>
          <div className="flex justify-between mb-2">
            <div className="flex items-center mr-2 justify-center bg-green-color p-3 w-24 h-10 rounded-md">
              <p className="text-white">
                6:00
              </p>
            </div>
            <div className="flex items-center mr-2 justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                7:00
              </p>
            </div>
            <div className="flex items-center justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                8:00
              </p>
            </div>

          </div>
          <p className='w-3/4 text-gray-color mb-2'>Указать своё время</p>
          <MySelect classNamePrefix='base-select' className="w-full" placeholder='Например 13:30' />
          <p className='text-gray-color mb-2'>до:</p>
          <div className="flex justify-between mb-2">
            <div className="flex items-center mr-2 justify-center bg-green-color p-3 w-24 h-10 rounded-md">
              <p className="text-white">
                9:00
              </p>
            </div>
            <div className="flex items-center mr-2 justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                10:00
              </p>
            </div>
            <div className="flex items-center justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                11:00
              </p>
            </div>
          </div>
          <p className='w-3/4 text-gray-color mb-2'>Указать своё время</p>
          <MySelect classNamePrefix='base-select' className="w-full" placeholder='Например 13:30' />
        </div>
        <div className='w-[49%] mb-4  bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>4. Регистрация выезда</p>
          <p className='text-gray-color mb-2'>c:</p>
          <div className="flex justify-between mb-2">
            <div className="flex items-center mr-2 justify-center bg-green-color p-3 w-24 h-10 rounded-md">
              <p className="text-white">
                6:00
              </p>
            </div>
            <div className="flex items-center mr-2 justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                7:00
              </p>
            </div>
            <div className="flex items-center justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                8:00
              </p>
            </div>

          </div>
          <p className='w-3/4 text-gray-color mb-2'>Указать своё время</p>
          <MySelect classNamePrefix='base-select' className="w-full" placeholder='Например 13:30' />
        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>5. Домашние животные</p>
          <p className='w-full text-gray-color mb-4'>
            Некоторым путещественникам нравиться брать с собой своих питомцев.
            Укажите разрешены ли домашние животные в вашем объекте.
          </p>
          <div className="flex">
            <MyButton className="bg-green-color text-white mr-4 p-3 px-20 rounded-md">
              Да, конечно
            </MyButton>
            <MyButton className="bg-page-color-2 text-gray-color  p-3 px-20 rounded-md">
              Нельзя
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  )
}
