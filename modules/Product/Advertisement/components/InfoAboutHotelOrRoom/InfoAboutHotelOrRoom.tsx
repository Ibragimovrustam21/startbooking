'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { MyButton } from "components/Button"
import { Comment } from "../comment/Comment"

const comfortServicesName = ['Ресторан', 'Семейные номера', 'Доставка еды и напитков в номер', 'Бар', 'Номера для некурящих', 'Аквапарк', 'Гидромассажная ванна', 'Станция зарядки электромобилей', 'Пляж', 'Трансфер с аэропорта', 'Кондиционер', 'Фитнес-центр', 'Спа и оздоровительный центр']

interface IInfoAboutHotelOrRoom {
  mode: boolean,
  selectedRoom: boolean,
  setMode: (arg: boolean) => void
}

export const InfoAboutHotelOrRoom = ({ mode, setMode, selectedRoom }: IInfoAboutHotelOrRoom) => {
  const [isActiveTagArray, setIsActiveTagArray] = useState<string[]>([])

  const addOrRemoveTagFromArray = (item: string) => {
    const isThereOrNot = isActiveTagArray.find(e => e === item)

    if (isThereOrNot) {
      const newArray = isActiveTagArray.filter(e => e !== item)
      setIsActiveTagArray(newArray)
    } else {
      setIsActiveTagArray([...isActiveTagArray, item])
    }
  }
  return (
    <div className="mt-3">
      {/* Short info: */}
      <div className="flex items-center grid grid-cols-4 py-4 border-b border-gray-400/100">
        <div>
          <p className="text-xl font-medium mt-3">
            от <span className="text-3xl">75$</span> в сутки
          </p>
        </div>
        <div className=" col-span-2">
          <p className="mb-1 text-slate-400">
            Ориентир:
          </p>
          <div className="flex items-center">
            <p className="text-font-color text-xl mr-5">
              2 км от Чарвакское водохранилище
            </p>
            <p className='flex items-center text-blue-600 cursor-pointer me-3' onClick={() => setMode(!mode)}>
              <Image
                src='/durbin.svg'

                className="mr-2"
                width='15'
                height='10'
                alt=''
              />
              {
                mode ? ' В режим карты' : 'В обычный режим'
              }
            </p>
          </div>
        </div>
        <div className="text-end">
          {
            selectedRoom
              ? <Link href='/product/booking'>
                <MyButton className="bg-orange-400 px-4 py-3 rounded-full text-white text-base">
                  Бронировать
                </MyButton>
              </Link>
              : <Link href='/product/select-room'>
                <MyButton className="bg-green-color px-4 py-3 rounded-full text-white text-base">
                  Выбрать номер
                </MyButton>
              </Link>
          }
        </div>
      </div>
      {/* description: */}
      <div className="flex grid grid-cols-4 py-4 border-b border-gray-400/50">
        <div>
          <p className="text-lg text-slate-400">
            Описание отеля:
          </p>
        </div>
        <div className="col-span-2">
          <p className="text-font-color">
            Роскошный отель Hyatt Regency Tashkent расположен в самом центре города Ташкент. К услугам гостей вращающийся ресторан, крытый бассейн и бесплатный Wi-Fi.
            <br />
            <br />
            Номера обставлены элегантной мебелью, а из окон открывается живописный вид. В некоторых номерах имеется гостиная зона с мини-баром и спутниковым телевидением.
            <br />
            <br />
            В спа- и фитнес-центре отеля Hyatt Regency есть современный тренажерный зал. Предоставляются спа-услуги, включая расслабляющий массаж.
            <br />
            <br />
            Станция метро Mustaqillik Maydoni находится в 12 минутах ходьбы. Расстояние от отеля Hyatt Regency Tashkent до международного аэропорта Ташкент составляет 7 км.
            <br />
            <br />
            Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 9,2.
            <br />
            <br />
            Мы говорим на вашем языке!
          </p>
        </div>
      </div>
      {/* Living conditions: */}
      <div className="flex grid grid-cols-4 py-4 border-b border-gray-400/50">
        <div>
          <p className="text-lg text-slate-400">
            Условия проживания:
          </p>
        </div>
        <div className="col-span-2">
          <div className="flex items-center mb-2">
            <div className="mr-3">
              <p className="mb-2">
                Заезд:
              </p>
              <div className="flex items-center justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
                <p className="text-gray-color">
                  с 12:00
                </p>
              </div>
            </div>
            <div>
              <p className="mb-2" >
                Выезд:
              </p>
              <div className="flex items-center justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
                <p className="text-gray-color">
                  до 22:00
                </p>
              </div>
            </div>
          </div>
          <ul>
            <li className="text-font-color text-base">• Бесплатный трансфер с Аэропорта </li>
            <li className="text-font-color text-base">• Высокоскоростной интернет</li>
            <li className="text-font-color text-base">• Завтрак включен в стоимость</li>
          </ul>
        </div>
      </div>
      {/* Paid services: */}
      <div className="flex grid grid-cols-4 py-4 border-b border-gray-400/50">
        <div>
          <p className="text-lg text-slate-400" >
            Платные услуги:
          </p>
        </div>
        <div className='col-span-2 flex items-center flex-wrap  mt-3'>
          {
            comfortServicesName.map((item, idx) => {
              const thisIsActive = isActiveTagArray.find(e => e === item)
              return (
                <div
                  onClick={() => addOrRemoveTagFromArray(item)}
                  className={`cursor-pointer rounded px-4 mr-2 py-2 mb-2 ${thisIsActive ? 'bg-green-400 text-white' : 'bg-gray-300/25'}`}
                  key={item}
                >
                  <p className={`text-base text-center  m-0 ${thisIsActive ? 'text-white' : 'text-gray-500'}`}>
                    {item}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* Guest Reviews: */}
      <div className="flex grid grid-cols-4 py-4">
        <div>
          <p className="text-lg text-slate-400">
            Отзывы гостей:
          </p>
        </div>
        <div className="col-span-2 border border-gray-400/50 p-4">
          <Comment />
        </div>
      </div>
    </div>
  )
}
