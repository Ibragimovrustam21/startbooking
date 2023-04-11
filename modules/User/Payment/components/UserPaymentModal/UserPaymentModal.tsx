import { PlasticCard } from 'modules/Product/Payment/components/PlasticCard/PlasticCard'
import React from 'react'
import { MyButton } from 'components/Button'
import { MyInput } from 'components/Input'
import { MyNumberInput } from 'components/Input/MyNumberInput'

export const UserPaymentModal = () => {
  return (
    <div>
      <div className='flex items-center'>
        <div className='w-[50%]'>
          <PlasticCard />
        </div>
        <div className='text-center w-[50%]'>
          <p className='font-semibold text-font-color text-2xl'>
            Карта Тинькофф Black
          </p>
        </div>
      </div>
      <div className='flex items-center text-start flex-wrap mt-8'>
        <div className='mb-5 mr-4 w-[45%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            Номер карты
          </p>
          <MyNumberInput
            type="number"
            maxLength={16}
            placeholder="XXXX  XXXX  XXXX  XXXX"
            myClass="py-2 border w-full"
          />
        </div>
        <div className='mb-5 w-[25%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            Срок действия
          </p>
          <MyInput
            type="text"
            placeholder="ММ / ГГ"
            myClass="py-2 border w-full"
          />
        </div>
        <div className='mb-5 mr-4 w-[45%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            Держатель карты
          </p>
          <MyInput
            type="text"
            placeholder="Имя Фамилия"
            myClass="py-2 border w-full"
          />
        </div>
        <div className='mb-5 w-[25%]'>
          <p className="mb-2 text-slate-500 font-medium text-sm">
            CVC
          </p>
          <MyNumberInput
            type="number"
            maxLength={3}
            placeholder="XXX"
            myClass="py-2 border w-full"
          />
        </div>
      </div>
      <div className='flex items-center justify-between mt-5'>
        <MyButton
          className='bg-blue-color text-white py-2 px-2 w-full rounded mr-5'
        >
          Сохранить данные
        </MyButton>
        <MyButton
          className='bg-red-400 hover:bg-red-500 text-white py-2 px-2 w-full rounded'
        >
          Удалить карту
        </MyButton>
      </div>
    </div>
  )
}
