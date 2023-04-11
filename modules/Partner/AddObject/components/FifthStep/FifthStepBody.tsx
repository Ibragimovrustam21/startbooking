'use client'
import Image from 'next/image'
import { MyButton } from 'components/Button'
import { MyInput } from 'components/Input'
import { MySelect } from 'components/Select'

export const FifthStepBody = () => {
  return (
    <div className='grid grid-cols-5 gap-4 mt-8'>
      <div>
        <p className='text-font-color font-medium text-lg'>Оплата</p>
      </div>
      <div className='col-span-3'>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>1. Оплата</p>
          <p className='w-full text-gray-color mb-4'>
            Вы можете списывать деньги с кредитных карт в своём объекте через POS-терминалы?
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
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>2. Налоги</p>
          <p className='w-full text-gray-color mb-4'>
            Пожалуйста укажите НДС и городской налог
          </p>
          <div className='flex'>
            <div className='w-1/2'>
              <p className='font-medium my-3'>НДС/налоги: настройки</p>
              <div className="flex mb-4 ">
                <input checked
                  id="nds-radio-1"
                  type="radio"
                  value=""
                  name="nds-radio"
                  className="w-4 h-4 mt-1 text-blue-color bg-gray-100 border-gray-300 focus:outline-none"
                />
                <label
                  htmlFor="nds-radio-1"
                  className="ml-3 w-3/4 text-font-color cursor-pointer"
                >
                  <span className='font-medium'> По умолчанию</span> <br />
                  (Сумма в размере 20% обычно включается в стоимость номеров для объектов размещения
                </label>
              </div>
              <div className="flex items-center mb-4 ">
                <input
                  id="nds-radio-2"
                  type="radio"
                  value=""
                  name="nds-radio"
                  className="w-4 h-4  text-blue-color bg-gray-100 border-gray-300 focus:outline-none"
                />
                <label
                  htmlFor="nds-radio-2"
                  className="ml-3 font-medium text-font-color cursor-pointer"
                >
                  Мне не нужно платить НДС
                </label>
              </div>
            </div>
            <div className='w-1/2'>
              <p className='font-medium my-3'>НДС/налоги: настройки</p>
              <div className="flex mb-4 ">
                <input checked
                  id="nds-radio-3"
                  type="radio"
                  value=""
                  name="nds-radio"
                  className="w-4 h-4 mt-1 text-blue-color bg-gray-100 border-gray-300 focus:outline-none"
                />
                <label
                  htmlFor="nds-radio-3"
                  className="ml-3 w-3/4 text-font-color cursor-pointer"
                >
                  <span className='font-medium'> По умолчанию</span> <br />
                  (Сумма в размере 20% обычно включается в стоимость номеров для объектов размещения
                </label>
              </div>
              <div className="flex items-center mb-4 ">
                <input
                  id="nds-radio-4"
                  type="radio"
                  value=""
                  name="nds-radio"
                  className="w-4 h-4  text-blue-color bg-gray-100 border-gray-300 focus:outline-none"
                />
                <label
                  htmlFor="nds-radio-4"
                  className="ml-3 font-medium text-font-color cursor-pointer"
                >
                  Индивидуальные настройки
                </label>
              </div>
              <p className="mb-2 text-gray-color">Городской налог</p>
              <MyInput
                type="text"
                placeholder="10 $"
                myClass="py-2 border w-full mb-6"
              />
              <p className="mb-2 text-gray-color">Включен ли городской налог в стоисть?</p>
              <div className="flex mt-4">
                <MyButton className="bg-green-color text-white mr-4 p-3 px-10 rounded-md">
                  Включить
                </MyButton>
                <MyButton className="bg-page-color-2 text-gray-color  p-3 px-10 rounded-md">
                  Не нужно
                </MyButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>3. Комиссия</p>
          <p className='w-full text-font-color my-2'>
            В начале каждого месяца мы будем отправлять вам счёт за  все бронирования, реализованные в предыдущем месяце
          </p>
          <div className='flex mt-8'>
            <div className='mr-10'>
              <p className='text-gray-color w-3/4 mb-6'>
                Подпись для счётов
                (например, юридическое название компании или частного лица
              </p>
              <MySelect classNamePrefix='base-select' placeholder='Выбрать' />
            </div>
            <div>
              <p className='text-gray-color w-3/4  mb-2'>
                У получателя счетов тот же адрес, что у вашего объекта размещения?
              </p>
              <div className="flex mt-4">
                <MyButton className="bg-green-color text-white mr-4 p-3 px-10 rounded-md">
                  Да
                </MyButton>
                <MyButton className="bg-page-color-2 text-gray-color  p-3 px-10 rounded-md">
                  Нет
                </MyButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>4. Документация</p>
          <p className='w-full text-font-color my-2'>
            Имеются ли у вас все подобающие документы для вашей деятельности и деятельности ваших объектов?
          </p>
          <div className="flex mt-4">
            <MyButton className="bg-green-color text-white mr-4 p-3 px-10 rounded-md">
              Да
            </MyButton>
            <MyButton className="bg-page-color-2 text-gray-color  p-3 px-10 rounded-md">
              Нет
            </MyButton>
          </div>

          <div className='my-4'>
            <input type="file" className='hidden' id='download-file' />
            <label className='w-full border h-48 flex items-center justify-center rounded cursor-pointer' htmlFor="download-file">
              <Image src='/doc.svg' alt='' width='51' height='68' />
            </label>
          </div>

          <div className='flex justify-center'>
            <p className='flex items-center text-sky-700 m-0 mb-1 mt-3 cursor-pointer'>
              <Image
                src='/download-circle.svg'
                className='mr-2'
                width='12'
                height='12'
                alt=''
              />
              Скачать печатную версию договора
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
