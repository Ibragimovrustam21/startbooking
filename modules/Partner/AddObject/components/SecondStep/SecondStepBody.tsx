'use client'
import Image from "next/image"
import { MySelect } from "components/Select"
import HotelImage from 'assets/hotelImage.png'
import { MyInput } from "components/Input"
import { useState } from "react"
import { Rate } from "components/Rate"
import { MyNumberInput } from "components/Input/MyNumberInput"

export const SecondStepBody = () => {
  const [readerResult, setReaderResult] = useState<any>([])
  const addImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target
    const selectedFiles = files as FileList;

    let reader = new FileReader()
    reader.readAsDataURL(selectedFiles?.[0])
    reader.onload = () => {
      console.log(readerResult);
      setReaderResult([...readerResult, reader.result])
    }
  }

  return (
    <div className='grid grid-cols-5 gap-4 mt-8'>
      <div>
        <p className='text-font-color font-medium text-lg'>Основная информация</p>
      </div>
      <div className='col-span-3 flex items-center flex-wrap justify-between'>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>1. Назовите свой объект</p>
          <p className='text-font-color mb-4'>Наименование должно быть не слишком длинным для быстрого считывания пользователем</p>
          <p className='text-gray-color mb-2'>Тип</p>
          <MySelect classNamePrefix='base-select' className="w-1/2" placeholder='Выберите' />
        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>3. Добавьте фотографии номера</p>
          <p className='text-font-color mb-4'>Чем больше фотографий в объявлении, тем больше шансов что человек полностью ознакомиться с будущем местом заселения</p>
          <div className="flex flex-wrap">
            {
              readerResult.length !== 0 && readerResult.map((item: string) => (<img className="h-40 mr-4 rounded mb-4" src={item} alt='' />))
            }
            <input type='file' onChange={e => addImg(e)} className='hidden' id='upload-image-room' />
            <label htmlFor="upload-image-room" className='w-60 h-40 flex items-center justify-center rounded-xl shadow-md bg-gray-200/25 cursor-pointer'>
              <svg width="85" height="84" viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="42.6264" cy="41.9184" r="41.7231" fill="#E8E8EE" />
                <rect x="38.4541" y="16.8848" width="8.34463" height="50.0678" rx="4.17231" fill="#F6F6F9" />
                <rect x="17.5926" y="46.0908" width="8.34462" height="50.0678" rx="4.17231" transform="rotate(-90 17.5926 46.0908)" fill="#F6F6F9" />
              </svg>
            </label>
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>3. Количество звёзд</p>
          <div className="flex items-center justify-center">
            <Rate />
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>4. Описание</p>
          <p className='text-font-color mb-4'>
            Придумайте завлекающий текст с информацией о вашем объекте, чтобы соискатели моги получить больше информации о нём
          </p>
          <textarea
            id="text"
            rows={4}
            className="w-full p-4 text-sm text-font-color bg-white border focus:outline-none"
            placeholder="Ваш текст"
            required
          ></textarea>
        </div>
        <div className="w-full flex justify-between mb-6">
          <div className="w-[47%] bg-white rounded-md shadow-md mb-6 p-6">
            <p className='font-medium text-xl my-3'>5. Локация</p>
            <div className='mb-5 mr-2 w-full'>
              <p className="mb-2 text-gray-color">
                Страна
              </p>
              <MyInput
                type="text"
                placeholder="Узбекистан"
                myClass="py-2 border w-full"
              />
            </div>
            <div className='mb-5 mr-2 w-full'>
              <p className="mb-2 text-gray-color text-sm">
                Город
              </p>
              <MyInput
                type="text"
                placeholder="например, Ташкент"
                myClass="py-2 border w-full"
              />
            </div>
            <div className='mb-5 mr-2 w-full'>
              <p className="mb-2 text-gray-color">
                Улица и номер дома
              </p>
              <MyInput
                type="text"
                placeholder="например, улица Абая, 1д"
                myClass="py-2 border w-full"
              />
            </div>
            <div className='mb-5 mr-2 w-full'>
              <p className="mb-2 text-gray-color">
                Ориентир
              </p>
              <MyInput
                type="text"
                placeholder="например, музей им. Амира Темура"
                myClass="py-2 border w-full"
              />
            </div>
            <div className='mb-5 mr-2 w-full'>
              <p className="mb-2 text-gray-color">
                Почтовый индекс
              </p>
              <MyInput
                type="text"
                myClass="py-2 border w-1/2"
              />
            </div>
          </div>
          <div className="w-[47%] h-80 bg-white rounded-md shadow-md mb-6 p-6">
            <p className='font-medium text-xl my-3'>6. Контактные данные</p>
            <div className='mb-5 mr-2 w-full'>
              <p className="mb-2 text-gray-color">
                Владелец
              </p>
              <MyInput
                type="text"
                placeholder="Имя Фамилия"
                myClass="py-2 border w-full"
              />
            </div>
            <div className='mb-5 mr-2 w-full'>
              <p className="mb-2 text-gray-color">
                Номер телефона
              </p>
              <MyNumberInput
                type="number"
                myClass="py-2 border w-full"
                placeholder="8 90 799 85 55"
              />
            </div>
            <p className="text-blue-color text-sm">
              Добавить номер телефона
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
