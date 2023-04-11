'use client'
import { RoomCard } from "modules/Product/SelectRoom/components"
import Image from "next/image"
import Link from "next/link"
import { MyButton } from "components/Button"

export const BookingInfo = () => {
  return (
    <>
      <div className="booking grid grid-cols-6">
        <div className="col-span-3">
          <p className="text-3xl font-semibold my-8">
            Бронирование
          </p>
          <div className="flex items-center p-3 border border-gray-300 rounded-md mb-6">
            <div className="mr-4">
              <Image
                src='/keys.svg'
                className="mr-2"
                width='50'
                height='33'
                alt=''
              />
            </div>
            <div>
              <p>
                <strong>Вероятно это жилье будет забронировано.</strong>  Тенденции путешествий
                в г. Milenki, Россия подсказывают, что одна из ночей вашей поездки скоро будет забронирована.
              </p>
            </div>
          </div>
          <div className="border-b border-gray-300/100 py-5">
            <p className="font-semibold text-font-color">12 ночей в г. Ташкент</p>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center ">
                <div className="bg-gray-300/50 px-5 py-2 flex items-center justify-center rounded-md mr-8">
                  <p className="font-semibold">
                    12 <br />
                    окт.
                  </p>
                </div>
                <div>
                  <p>
                    День прибытия Четверг <br />
                    после 15:00
                  </p>
                </div>
              </div>
              <div className="flex items-center ">
                <div className="bg-gray-300/50 px-5 py-2 flex items-center justify-center rounded-md mr-8">
                  <p className="font-semibold">
                    24 <br />
                    окт.
                  </p>
                </div>
                <div>
                  <p>
                    День выезда Суббота <br />
                    в любое время
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-gray-300/100 py-8">
            <p className="font-semibold text-font-color mb-1">
              Прибывающие
            </p>

            <p className="flex items-center text-sm">
              <Image
                src='/people.svg'
                className="mr-2"
                width='18'
                height='13'
                alt=''
              />
              2 взрослых
            </p>
          </div>
          <div className="py-6 w-3/4">
            <div className="py-4 rounded-md">
              <p className="text-font-color font-semibold text-xl">
                Рассчёт стоимости
              </p>
              <div className="mt-5">
                <div className="flex mb-2">
                  <p className="min-w-fit">
                    75 $ x 12 ночи
                  </p>
                  <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
                  <p className="min-w-fit">
                    900 $
                  </p>
                </div>
                <div className="flex mb-2">
                  <p className="min-w-fit">
                    10%ная скидка на неделю
                  </p>
                  <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
                  <p className="min-w-fit">
                    -90 $
                  </p>
                </div>
                <div className="flex mb-2">
                  <p className="min-w-fit">
                    НДС 20%
                  </p>
                  <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
                  <p className="min-w-fit">
                    180 $
                  </p>
                </div>
                <div className="flex mb-2 border-b border-gray-500/100 pb-5 ">
                  <p className="min-w-fit font-semibold" >
                    Итого к оплате
                  </p>
                  <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
                  <p className="min-w-fit font-semibold" >
                    990 $
                  </p>
                </div>
                <div className="flex mb-2 pt-4">
                  <p className="min-w-fit font-semibold">
                    К оплате сейчас
                  </p>
                  <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
                  <p className="min-w-fit font-semibold">
                    247 $
                  </p>
                </div>

                <div className="flex mb-2">
                  <p className="min-w-fit">
                    К оплате 24 октября 2019
                  </p>
                  <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
                  <p className="min-w-fit">
                    742 $
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-end-7 col-span-2">
          <RoomCard />
        </div>
      </div>
      <div className='text-center mt-5 mb-4'>
        <Link href='/product/payment'>
          <MyButton className='bg-green-color text-white font-medium p-3 px-5 rounded-full'>
            Согласиться и бронировать
          </MyButton>
        </Link>
      </div>
    </>

  )
}
