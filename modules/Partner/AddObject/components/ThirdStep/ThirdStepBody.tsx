'use client'
import Image from "next/image"
import { useState } from "react"
import { MySelect } from "components/Select"

export const ThirdStepBody = () => {
  const comfortServicesName = ['Ресторан', 'Семейные номера', 'Доставка еды и напитков в номер', 'Бар', 'Номера для некурящих', 'Аквапарк', 'Гидромассажная ванна', 'Станция зарядки электромобилей', 'Пляж', 'Трансфер с аэропорта', 'Кондиционер', 'Фитнес-центр', 'Спа и оздоровительный центр']
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
    <div className='grid grid-cols-5 gap-4 mt-8'>
      <div>
        <p className='text-font-color font-medium text-lg'>Удобства и услуги</p>
      </div>
      <div className='col-span-3 flex flex-wrap justify-between'>
        <div className='w-[49%] mb-4  bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>1. Интернет</p>
          <p className='text-gray-color mb-2'>У гостей будет доступ  винтернет?</p>
          <MySelect classNamePrefix='base-select' placeholder='Да, бесплатно' />
          <p className='text-gray-color mb-2'>Где?</p>
          <MySelect classNamePrefix='base-select' placeholder='Места общего пользования' />
        </div>
        <div className='w-[49%] mb-4  bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>2. Парковка</p>
          <p className='text-gray-color mb-2'>Выберите тип парковки</p>
          <MySelect classNamePrefix='base-select' placeholder='Крытая бесплатная парковка' />
          <p className='text-gray-color mb-2'>Где?</p>
          <MySelect classNamePrefix='base-select' placeholder='Здание отеля' />
        </div>

        <div className="w-[49%] mb-4">
          <div className='w-full h-64 mb-4  bg-white rounded-md p-4 shadow-md'>
            <p className='font-medium text-xl my-3'>3. Языки</p>
            <p className='text-gray-color mb-2'>На каких языках общается персонал?</p>
            <MySelect classNamePrefix='base-select' placeholder='Русский' className="mb-4" />
            <MySelect classNamePrefix='base-select' placeholder='Здание отеля' />
            <p className='flex items-center text-sky-700 m-0 mb-1 mt-3'>
              <Image
                src='/plus-ring.svg'
                className='mr-2'
                width='12'
                height='12'
                alt=''
              />
              Добавить свои варианты
            </p>
          </div>

          <div className='w-full mb-4  bg-white rounded-md p-4 shadow-md'>
            <p className='font-medium text-xl my-3'>5. Удобства и услуги популярные среди гостей</p>
            <p className='text-gray-color mb-2'>
              Укажите все дополнительные удобства и услуги (платные и бесплатные), которые предоставляются в вашем отеле
            </p>
            <div className='comfort__services--box flex items-center flex-wrap mt-3'>
              {
                comfortServicesName.map((item, idx) => {
                  const thisIsActive = isActiveTagArray.find(e => e === item)
                  return (
                    <div
                      onClick={() => addOrRemoveTagFromArray(item)}
                      className={`cursor-pointer rounded px-4 py-2 mb-2 mr-2 ${thisIsActive ? 'bg-green-color text-white' : 'bg-gray-300/25'}`}
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
            <p className='flex items-center text-sky-700 m-0 mb-1 mt-3'>
              <Image
                src='/plus-ring.svg'
                className='mr-2'
                width='12'
                height='12'
                alt=''
              />
              Добавить свои варианты
            </p>
          </div>
        </div>

        <div className='w-[49%] h-128 mb-4  bg-white rounded-md p-4 shadow-md'>
          <p className='font-medium text-xl my-3'>4. Завтрак</p>
          <p className='text-gray-color mb-2'>Подача завтрака</p>
          <MySelect classNamePrefix='base-select' className="mb-2" placeholder='Да, бесплатно' />

          <p className='text-gray-color mb-2'>c:</p>
          <div className="flex justify-between mb-2">
            <div className="flex items-center mr-2 justify-center bg-green-color p-3 w-24 h-10 rounded-md">
              <p className="text-white">
                6:00
              </p>
            </div>
            <div className="flex items-center mr-2 justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                7:00
              </p>
            </div>
            <div className="flex items-center justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                8:00
              </p>
            </div>

          </div>
          <p className='text-gray-color mb-2'>Указать своё время</p>
          <MySelect classNamePrefix='base-select' className="mb-2" placeholder='Выбрать' />

          <p className='text-gray-color mb-2'>до:</p>
          <div className="flex justify-between mb-2">
            <div className="flex items-center mr-2 justify-center bg-green-color p-3 w-24 h-10 rounded-md">
              <p className="text-white">
                9:00
              </p>
            </div>
            <div className="flex items-center mr-2 justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                10:00
              </p>
            </div>
            <div className="flex items-center justify-center bg-gray-300/25 p-3 w-24 h-10 rounded-md">
              <p className="text-gray-color">
                11:00
              </p>
            </div>


          </div>
          <p className='text-gray-color mb-2'>Указать своё время</p>
          <MySelect classNamePrefix='base-select' placeholder='Выбрать' />
        </div>
      </div>
    </div>
  )
}
