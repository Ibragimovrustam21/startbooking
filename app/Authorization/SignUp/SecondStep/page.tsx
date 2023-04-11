'use client'
import { UserHead } from 'components/UserHead'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { MyButton } from 'components/Button'
import { MyInput } from 'components/Input'
import { MyNumberInput } from 'components/Input/MyNumberInput';

export default function SecondStep() {
  const [seconds, setSeconds] = useState(59);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      // if (seconds === 0) {
      //     setSeconds(59);
      //   }
    }, 1000)

    return () => {
      clearInterval(myInterval);
    };
  });
  return (
    <div className="wrapper bg-page-color-2 min-h-screen">
      <UserHead />
      <div className="w-1/2">
        <p className="text-black-700 my-4 font-medium" >
          На ваш номер телефона был выслан пятизначный код для потдверждения вашего аккаунта. Просим вписать его в нужное поле для завершения регистрации
        </p>
      </div>
      <div className='h-screen flex items-center flex-col justify-center '>
        <div className='flex flex-col items-center w-1/3 my-4 m-auto bg-white rounded-xl p-4 '>
          <p className='text-font-color font-medium text-xl mt-3 mb-2'>Код подтверждения</p>
          <svg className='my-4' width="35" height="35" viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill={seconds === 0 ? '#EB5757' : '#E8E8EE'} d="M25.5684 15.0339C25.1635 14.6364 24.6574 14.4377 24.0838 14.4377H23.3752V10.2972C23.3752 7.64728 22.3967 5.36173 20.4735 3.47366C18.5165 1.5856 16.1883 0.625 13.489 0.625C10.7897 0.625 8.49525 1.5856 6.53824 3.47366C4.61498 5.36173 3.63648 7.64728 3.63648 10.2972V14.4377H2.96165C2.38804 14.4377 1.88192 14.6364 1.47703 15.0339C1.03839 15.4645 0.835938 15.9283 0.835938 16.5245V28.946C0.835938 29.5091 1.03839 30.006 1.44328 30.4035C1.84818 30.8009 2.3543 30.9997 2.92791 30.9997H24.0501C24.6237 30.9997 25.1298 30.8009 25.5347 30.4035C25.9396 30.006 26.142 29.5091 26.142 28.946V16.5245C26.1758 15.9283 25.9733 15.4645 25.5684 15.0339ZM19.1238 14.4377H7.8879V10.2972C7.8879 8.7735 8.42777 7.48166 9.54123 6.38857C10.6547 5.29548 11.9706 4.7655 13.5227 4.7655C15.0748 4.7655 16.3908 5.29548 17.5042 6.38857C18.6177 7.48166 19.1576 8.7735 19.1576 10.2972V14.4377H19.1238Z" />
          </svg>

          <div className='flex my-3'>
            <MyNumberInput type='number' placeholder='*' maxLength={1} myClass={`w-[3rem] text-3xl mr-2  text-slate-500 border ${seconds === 0 ? 'border-youtube placeholder:text-youtube' : 'placeholder:text-slate-500'} py-2 px-4`} />
            <MyNumberInput type='number' placeholder='*' maxLength={1} myClass={`w-[3rem] text-3xl mr-2  text-slate-500 border ${seconds === 0 ? 'border-youtube placeholder:text-youtube' : 'placeholder:text-slate-500'} py-2 px-4`} />
            <MyNumberInput type='number' placeholder='*' maxLength={1} myClass={`w-[3rem] text-3xl mr-2  text-slate-500 border ${seconds === 0 ? 'border-youtube placeholder:text-youtube' : 'placeholder:text-slate-500'} py-2 px-4`} />
            <MyNumberInput type='number' placeholder='*' maxLength={1} myClass={`w-[3rem] text-3xl mr-2  text-slate-500 border ${seconds === 0 ? 'border-youtube placeholder:text-youtube' : 'placeholder:text-slate-500'} py-2 px-4`} />
            <MyNumberInput type='number' placeholder='*' maxLength={1} myClass={`w-[3rem] text-3xl   text-slate-500 border ${seconds === 0 ? 'border-youtube placeholder:text-youtube' : 'placeholder:text-slate-500'} py-2 px-4`} />
          </div>
          <p className='text-gray-color text-sm mt-2 mb-3'>
            Выслать повторно ({seconds})
          </p>
        </div>

        <div className="text-center mt-10">
          <MyButton
            disabled
            className="mb-3 bg-green-color text-white font-medium p-3 px-20 rounded-full disabled:bg-gray-400/75"
          >
            Готово
          </MyButton>
        </div>
      </div>

    </div>
  )
}
