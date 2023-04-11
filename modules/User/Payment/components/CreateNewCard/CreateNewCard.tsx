import Image from 'next/image'
import React from 'react'
import { MyButton } from 'components/Button'
import { MyInput } from 'components/Input'
import { MyNumberInput } from 'components/Input/MyNumberInput'

interface ICreateNewCard {
  setIsModalView: (arg: boolean) => void
}

export const CreateNewCard = ({ setIsModalView }: ICreateNewCard) => {
  return (
    <>
      <p className='font-semibold text-font-color text-2xl mb-10 mt-4'>
        Добавить новую карту
      </p>
      <div className='flex items-center flex-wrap mt-5'>
        <div className='mb-5 mr-2 w-[32%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            Номер карты
          </p>
          <div className="relative">
            <MyNumberInput
              type="number"
              maxLength={16}
              placeholder="XXXX  XXXX  XXXX  XXXX"
              myClass="py-2 bg-page-color-2 px-8 w-full"
            />
            <Image
              className="absolute left-2 top-3"
              src='/card.svg'
              alt=""
              width='18'
              height='18'
            />

          </div>
        </div>
        <div className='mb-5 mr-8 w-[25%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            Срок действия
          </p>
          <MyInput
            type="text"
            placeholder="ММ / ГГ"
            myClass="py-2 border-0 bg-page-color-2 w-full"
          />
        </div>
        <div className='mb-5 w-[32%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            Назовите новую карту
          </p>
          <MyInput
            type="text"
            placeholder="Например Альфа-Онлайн"
            myClass="py-2 border-0 bg-page-color-2 w-full"
          />
        </div>
        <div className='mb-5 mr-2 w-[32%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            Держатель карты
          </p>
          <div className="relative">
            <MyInput
              type="text"
              placeholder="Имя Фамилия"
              myClass="py-2 bg-page-color-2 px-8 w-full"
            />
            <Image
              className="absolute top-3 left-2"
              src='/user.svg'
              alt=""
              height='18'
              width='18'
            />
          </div>
        </div>
        <div className='mb-5 mr-8 w-[25%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            CVC
          </p>
          <MyNumberInput
            type="number"
            maxLength={3}
            placeholder="XXX"
            myClass="py-2 border-0 bg-page-color-2 w-full"
          />
        </div>
        <div className='flex items-center w-[32%] mt-1'>
          <MyButton
            className='bg-blue-color w-full text-white py-2 px-2 rounded'
            onClick={() => setIsModalView(true)}
          >
            Сохранить карту
          </MyButton>

        </div>
      </div>
    </>
  )
}
