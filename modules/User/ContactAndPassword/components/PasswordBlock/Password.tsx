import React from 'react'
import { MyInput } from 'components/Input'

export const Password = () => {
  return (
    <div className="bg-white rounded-xl p-5">
      <p className='text-font-color font-semibold text-2xl my-5'>
        Смена пароля
      </p>
      <div className='mb-5 mr-2 w-full'>
        <p className="mb-2 text-gray-color text-sm">
          Текущий пароль
        </p>
        <MyInput
          type="password"
          placeholder="Ваш пароль"
          myClass="py-2 border w-full"
        />
      </div>
      <div className='mb-5 mr-2 w-full'>
        <p className="mb-2 text-gray-color text-sm">
          Новый пароль
        </p>
        <MyInput
          type="password"
          placeholder="Введите новый пароль"
          myClass="py-2 border w-full"
        />
      </div>
      <div className='mb-5 mr-2 w-full'>
        <p className="mb-2 text-gray-color text-sm">
          Подтверждение паролья
        </p>
        <MyInput
          type="password"
          placeholder="Введите новый пароль повторно"
          myClass="py-2 border w-full"
        />
      </div>
    </div>
  )
}
