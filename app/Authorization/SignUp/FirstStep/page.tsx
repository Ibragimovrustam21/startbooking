'use client'
import { UserHead } from "components/UserHead";
import { Contact, Password } from "modules/User/ContactAndPassword/components";
import Link from "next/link";
import { MyButton } from "components/Button";
import { MyInput } from "components/Input";
import { MySelect } from "components/Select";

export default function SignUp() {
  return (
    <div className="wrapper bg-page-color-2">
      <UserHead />
      <div className="w-1/2">
        <p className="text-black-700 my-4 font-medium" >
          При заполнении полей обратите внимание на поля помеченные символом “*”. Это поля для обязательного заполнения
        </p>
      </div>

      <div className="flex w-3/4 m-auto justify-center flex-col mt-10">
        <div className="bg-white  rounded-xl mb-6 p-4">
          <p className="py-2 text-font-color text-2xl">
            Настроить личные данные
          </p>
          <div className="flex items-center flex-wrap mt-4">
            <div className="w-[45%] mb-2 mr-4">
              <p className="mb-1 text-gray-color">
                Ваше имя
              </p>
              <MyInput type="text" placeholder="Имя" myClass="py-2 border w-full" />
            </div>
            <div className="w-[45%] mb-2 mr-4">
              <p className="mb-1 text-gray-color">
                Фамилия
              </p>
              <MyInput type="text" placeholder="Фамилия" myClass="py-2 border w-full" />
            </div>
            <div className="w-[45%] mb-2 mr-4">
              <p className="mb-1 text-gray-color">
                Отчество
              </p>
              <MyInput type="text" placeholder="Отчество" myClass="py-2 border w-full" />
            </div>
            <div className="w-[45%] mb-2">
              <p className="mb-1 text-gray-color">
                Пол
              </p>
              <MySelect placeholder="Пол" classNamePrefix="base-select" />
            </div>
            <div className="w-[45%] mb-2">
              <p className="mb-1 text-gray-color">
                Дата рождения (дд.мм.гг.)
              </p>
              <MyInput type="text" placeholder="21.10.2000" myClass="py-2 border w-full" />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl mb-6 p-4">
          <p className="py-2 text-font-color text-2xl">
            Локация
          </p>
          <div className="flex items-center flex-wrap mt-4">
            <div className="w-[45%] mb-2 mr-4">
              <p className="mb-1 text-gray-color">
                Страна
              </p>
              <MySelect placeholder="Узбекистан" classNamePrefix="base-select" />
            </div>
            <div className="w-[45%] mb-2">
              <p className="mb-1 text-gray-color">
                Город
              </p>
              <MySelect placeholder="Ташкент" classNamePrefix="base-select" />
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="w-[47%]">
            <Contact />
          </div>
          <div className="w-[47%]">
            <Password />
          </div>
        </div>
        <div className="text-center">
          <Link href='/authorization/sign-up/second-step'>
            <MyButton
              className="mb-3 bg-green-color text-white font-medium p-3 px-20 rounded-full"
            >
              Дальше
            </MyButton>
          </Link>
        </div>
      </div>


    </div >
  )
}
