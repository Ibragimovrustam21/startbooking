import Image from "next/image";
import Link from "next/link";
import { MyButton } from "components/Button";
import AuthImage from 'assets/auth2.png'
import { MyInput } from "components/Input";

export default function SignIn() {
  return (
    <div className="wrapper bg-page-color-2 flex items-center justify-center">
      <div className='p-5 w-1/3 mt-12'>
        <div className="bg-white rounded-xl p-6 shadow-md mb-4 relative">
          <Image src={AuthImage} alt='' className="absolute -top-20 right-5" />
          <p className="text-font-color text-2xl font-medium my-3">
            Вход в аккаунт
          </p>
          <p className="text-font-color mb-6">
            Введите адрес своей почты или номер телефона и пароль, чтобы войти
          </p>
          <MyInput
            type="email"
            placeholder="Электронная почта/номер телефона"
            myClass="bg-page-color-2 py-2 mb-3 w-full"
          />
          <MyInput
            type="password"
            placeholder="Пароль"
            myClass="bg-page-color-2 py-2 w-full"
          />
        </div>
        <div className="flex items-center justify-between mb-10">
          <div className='flex items-center'>
            <input
              id="support-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-font-color bg-gray-100 border-gray-300 rounded focus:outline-none"
              name='email-check'
            />
            <label
              htmlFor="support-checkbox"
              className="ml-2 text-base font-medium text-font-color focus:outline-none cursor-pointer"
            >
              Запомнить меня
            </label>
          </div>
          <p className="text-font-color text-sm">
            <Link href=''>
              Забыли пароль?
            </Link>
          </p>
        </div>
        <MyButton className='w-full mb-3 bg-green-color text-white font-medium p-3 px-5 rounded-full'>
          Войти
        </MyButton>
        <MyButton className='w-full mb-2 bg-page-color-2 text-gray-color font-medium p-3 px-5 rounded-full'>
          <Link href='/authorization/sign-up/first-step'>
            У меня нет аккаунта
          </Link>
        </MyButton>
      </div>
    </div>
  )
}
