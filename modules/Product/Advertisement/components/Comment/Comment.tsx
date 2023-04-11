'use client'
import { useState } from "react"
import Image from "next/image"
import Avatar from 'assets/ava.png'
import { MySelect } from "components/Select"
import { MyButton } from "components/Button"
const myOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
export const Comment = () => {
  const [isAuth, setIsAuth] = useState<boolean>(true)
  return (
    <>
      {/* comment top */}
      {
        isAuth
          ? <>
            <div className="border-b border-gray-400/50 pb-2 grid grid-cols-8 gap-1">
              <div>
                <Image
                  src={Avatar}
                  className='rounded-full m-0'
                  alt="avatar"
                />
              </div>
              <div className="col-span-7">

                <form>
                  <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50">
                    <div className="px-4 py-2 bg-white rounded-t-md">
                      <textarea
                        id="comment"
                        rows={4}
                        className="w-full px-0 text-sm text-font-color bg-white border-0 focus:outline-none"
                        placeholder="Напишите ваше мнение"
                        required
                      ></textarea>
                    </div>
                    <div className="flex items-center justify-between px-3 py-2 border-t border-gray-300/25">
                      <MyButton
                        type="submit"
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-color rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                      >
                        Post comment
                      </MyButton>
                      <div className="w-1/4">
                        <MySelect
                          placeholder="Выбрать"
                          classNamePrefix="base-select"
                          options={myOptions}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
          : <>
            <div className="border-b border-gray-400/50 pb-3 ">
              <p className="text-4xl font-medium">
                Зарегистрируйтесь чтобы вступить в обсуждение
              </p>
              <p className="text-sm mb-4 mt-3">
                Добавьте свой отзыв о инвестидее, войдя в систему или зарегистрировавшись.
              </p>
              <div className="flex items-center mt-1">
                <MyButton className="bg-blue-color text-white text-sm py-2 px-3 rounded-full">
                  Зарегистрироваться по электронной почте
                </MyButton>
                <p className="text-slate-400 mx-3">
                  или
                </p>
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-facebook mr-1 cursor-pointer">
                  <Image
                    src='/facebook.svg'
                    width='9'
                    height='17'
                    alt=''
                  />
                </div>
                <div className="rounded-full h-10 w-10 flex items-center justify-center bg-gray-300/25 cursor-pointer">
                  <Image
                    src='/google.svg'
                    width='18'
                    height='18'
                    alt=''
                  />
                </div>
              </div>
            </div>
          </>
      }
      {/* comment body */}
      <div className="py-4">
        {
          [1, 2, 3].map((item, idx) => {
            return (
              <div className="grid grid-cols-8 gap-1 mb-4" key={idx}>
                {/* user photo */}
                <div>
                  <Image
                    src={Avatar}
                    className='rounded-full m-0'
                    alt="avatar"
                  />
                </div>
                {/* user info */}
                <div className="col-span-6">
                  <p><strong className="text-base text-slate-800">Fabiano Carvalho Morais</strong> <span className="text-xs text-gray-400">•  20 минут назад </span></p>
                  <p>show! Consistent idea and presentation</p>
                </div>
                {/* user rate */}
                <div className="">
                  <p className="flex items-center justify-end text-orange-300 fw-bold ml-1">
                    <Image
                      src='/grade-star.svg'
                      width='11'
                      height='10'
                      alt=''
                    />
                    10.0
                  </p>
                </div>
              </div>
            )
          })
        }
      </div>
      <div>
        <p className="text-blue-700 text-center cursor-pointer">
          Смотреть другие комментарии ↓
        </p>
      </div>
    </>
  )
}
