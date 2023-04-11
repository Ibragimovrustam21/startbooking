import AuthImage from 'assets/auth.png'
import Image from 'next/image'
import Link from 'next/link'
import { MyButton } from 'components/Button'


export default function Authorization() {
  return (
    <div className="wrapper bg-page-color-1 flex items-center justify-center">
      <div className='p-5 rounded-xl w-1/3 text-center'>
        <div className='flex items-center w-full'>
          <Image
            src={AuthImage}
            alt='auth-image'
            className='m-0 m-auto'
          />
        </div>
        <p className='text-font-color text-2xl font-medium my-3'>
          Добро пожаловать!
        </p>
        <p className='text-center my-4'>
          Наконец-то ты добрался до своего личного кабинета. Осталось только войти в него
          или зарегистрировать аккаунт ;)
        </p>
        <MyButton className='w-full mb-4 bg-green-color text-white font-medium p-3 px-5 rounded-full'>
          <Link href='/authorization/sign-in'>
            Войти в аккаунт
          </Link>
        </MyButton>
        <MyButton className='w-full mb-2 bg-gray-200/75 text-font-color font-medium p-3 px-5 rounded-full'>
          <Link href='/authorization/sign-up/first-step'>
            Создать новый аккаунт
          </Link>
        </MyButton>
      </div>
    </div>
  )
}
