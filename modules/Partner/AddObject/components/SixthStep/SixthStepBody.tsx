'use client'
import { useState } from "react"
import Image from "next/image"
import { MyInput } from "components/Input"
import { IOptions, MySelect } from "components/Select"
import { SingleValue } from 'react-select'
import { MyNumberInput } from "components/Input/MyNumberInput"

const myOptions = [
  { value: 'uz', label: '🇺🇿 UZB' },
  { value: 'eng', label: '🇺🇸 USD' },
]

export const SixthStepBody = () => {
  const [sofa, setSofa] = useState<number[]>([1])
  const [currencyValue, setCurrencyValue] = useState({
    uzb: '',
    usd: ''
  })
  const [readerResult, setReaderResult] = useState<any>([])
  const [changeCurrency, setChangeCurrency] = useState<boolean>(true)

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

  // input currency

  const onChangeInputCurrency = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setCurrencyValue({ ...currencyValue, [e.currentTarget.name]: val })

  }


  // select currency
  const onChangeSelectUz = (newValue: SingleValue<IOptions> | null) => {
    if (newValue?.value == 'uz') setChangeCurrency(true)
    else setChangeCurrency(false)
  }

  const onChangeSelectUsd = (newValue: SingleValue<IOptions> | null) => {
    if (newValue?.value == 'eng') setChangeCurrency(true)
    else setChangeCurrency(false)
  }

  return (
    <div className='grid grid-cols-5 gap-4 mt-8'>
      <div>
        <p className='text-font-color font-medium text-lg'>Параметры номера</p>
      </div>
      <div className='col-span-3'>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>1. Номер</p>
          <div className="flex justify-between">
            <div className="w-1/2 mr-4">
              <p className='w-full text-gray-color mb-2'>
                Тип номера
              </p>
              <MySelect classNamePrefix='base-select' className="w-full" placeholder='Выберите' />
            </div>
            <div className="w-1/2">
              <p className='w-full text-gray-color mb-2'>
                Курение
              </p>
              <MySelect classNamePrefix='base-select' className="w-full" placeholder='Для некурящих' />
            </div>
          </div>
          <div className="mt-4">
            <p className='w-3/4 text-gray-color mb-2'>
              Количество номеров этого типа
            </p>
            <MyNumberInput
              type="number"
              maxLength={3}
              placeholder="0"
              myClass="py-2 border w-[5rem]"
            />
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>2. Кровати</p>
          {
            sofa.map((item, idx) => {
              return (
                <div className="flex justify-between mb-2" key={idx}>
                  <div className="w-1/2 mr-4">
                    <p className='w-full text-gray-color mb-2'>
                      Тип кроватей
                    </p>
                    <MySelect classNamePrefix='base-select' className="w-full" placeholder='Двуспальная (King size)' />
                  </div>
                  <div className="w-1/2">
                    <p className='w-full text-gray-color mb-2'>
                      Укажите количество кроватей
                    </p>
                    <MyNumberInput type="number" maxLength={3} myClass="w-[5rem] py-1.5 border border-gray-400/50" placeholder='0' />
                  </div>
                </div>
              )
            })
          }
          <p
            className='flex items-center text-sky-700 m-0 mb-1 mt-3 cursor-pointer'
            onClick={() => setSofa([...sofa, sofa.length + 1])}
          >
            <Image
              src='/download-circle.svg'
              className='mr-2'
              width='12'
              height='12'
              alt=''
            />
            Добавить еще одну кровать
          </p>
          <div className="w-1/2 mt-6">
            <p className='w-full text-gray-color mb-2'>
              Количество гостей в номере
            </p>
            <MyNumberInput type="number" maxLength={2} myClass="w-[5rem] py-1.5 border border-gray-400/50" placeholder='0' />
          </div>
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
          <p className='font-medium text-xl my-3'>4. Размер номера (не обязательно)</p>
          <div className="mt-4">
            <p className='w-3/4 text-gray-color mb-2'>
              Укажите квадратуру номера
            </p>
            <MyNumberInput
              type="number"
              placeholder="41 м2"
              myClass="py-2 border w-[5rem] appearance-none"
              maxLength={3}
            />
          </div>
        </div>
        <div className="w-full bg-white rounded-md shadow-md p-6 mb-6">
          <p className='font-medium text-xl my-3'>5. Цена за ночь</p>
          <div className="flex mt-4">
            <div className="w-1/2 mr-4">
              <p className='w-3/4 text-gray-color  mb-2'>
                Укажите забовую цену за ночь на 1 человека
              </p>
              <div className="flex">
                <MyNumberInput
                  type="number"
                  value={changeCurrency ? currencyValue.uzb : Number(currencyValue.uzb) / 11000}
                  onChange={(e) => onChangeInputCurrency(e)}
                  placeholder="1 455 000"
                  myClass="py-1.5 border w-[8rem] mr-4"
                  name={'uzb'}
                />
                <div className="relative">
                  <MySelect
                    defaultValue={myOptions[0]}
                    value={changeCurrency ? myOptions[0] : myOptions[1]}
                    options={myOptions}
                    onChange={onChangeSelectUz}
                    className="w-[7rem]"
                    classNamePrefix='base-select'
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2 mr-4">
              <p className='w-full text-gray-color  mb-2'>
                Укажите забовую цену за ночь на 1 человека для не резидентов Узбекистана
              </p>
              <div className="flex">
                <MyNumberInput
                  type="number"
                  value={changeCurrency ? currencyValue.usd : Number(currencyValue.usd) * 11000}
                  onChange={(e) => onChangeInputCurrency(e)}
                  placeholder="150"
                  myClass="py-1.5 border w-[8rem] mr-4"
                  name='usd'
                />
                <div className="relative">
                  <MySelect
                    defaultValue={myOptions[1]}
                    value={changeCurrency ? myOptions[1] : myOptions[0]}
                    options={myOptions}
                    onChange={onChangeSelectUsd}
                    className="w-[7rem]"
                    classNamePrefix='base-select'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
