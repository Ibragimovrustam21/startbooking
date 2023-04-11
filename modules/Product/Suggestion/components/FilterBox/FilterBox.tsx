'use client'
import Image from 'next/image'
import { useState } from 'react'
import { MySelect } from 'components/Select'
import { MyInput } from 'components/Input'
import { MyButton } from 'components/Button'

interface IFilterBox {
  mode: boolean,
  setMode: (mode: boolean) => void
}

const comfortServicesName = ['Ресторан', 'Семейные номера', 'Доставка еды и напитков в номер', 'Бар', 'Номера для некурящих', 'Аквапарк', 'Гидромассажная ванна', 'Станция зарядки электромобилей', 'Пляж', 'Трансфер с аэропорта', 'Кондиционер', 'Фитнес-центр', 'Спа и оздоровительный центр']
const myOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const activeClass = 'border-transparent bg-gray-400/25'

export const FilterBox = ({ mode, setMode }: IFilterBox) => {
  const [isAdditionView, setIsAdditionView] = useState<boolean>(false)
  const [isActiveTagArray, setIsActiveTagArray] = useState<string[]>([])
  const [activeItem, setActiveItem] = useState<string>('filter-date')

  const addOrRemoveTagFromArray = (item: string) => {
    const isThereOrNot = isActiveTagArray.find(e => e === item)

    if (isThereOrNot) {
      const newArray = isActiveTagArray.filter(e => e !== item)
      setIsActiveTagArray(newArray)
    } else {
      setIsActiveTagArray([...isActiveTagArray, item])
    }
  }
  const filterBtn = (name: string) => {
    setActiveItem(name)
  }

  return (
    <div className='filterBox rounded-xl bg-white p-4'>
      <div className="flex items-center mb-3">
        <MyInput
          type='text'
          myClass='mr-2 py-3  bg-page-color-2 w-full placeholder:text-slate-500'
          placeholder='Поиск по названию объекта'
        />
        <MyButton
          className="bg-green-color h-full px-3 py-3 rounded"
          type="button"
          id="button-addon2"
        >
          <Image
            src='/search.svg'
            width='22'
            height='22'
            alt=''
          />
        </MyButton>
      </div>

      <div className='flex items-center mt-3  '>
        <div className='w-60'>
          <p className='font-medium flex items-center text-font-color m-0'>Сортировать объекты</p>
        </div>
        <div className="grid grid-cols-5 w-full">
          <div className={`${activeItem == 'filter-date' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  rounded-l-md  justify-center flex items-center p-2`} onClick={() => filterBtn('filter-date')}>
            <p className={`${activeItem == 'filter-date' ? 'text-slate-700' : 'text-gray-400'}`}>По дате добавления</p>
          </div>
          <div className={`${activeItem == 'filter-up-cost' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  flex items-center justify-center p-2`} onClick={() => filterBtn('filter-up-cost')}>
            <p className={`${activeItem == 'filter-up-cost' ? 'text-slate-600' : 'text-gray-400'}`}>По возрастанию цены</p>
          </div>
          <div className={`${activeItem == 'filter-down-cost' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  flex items-center justify-center p-2`} onClick={() => filterBtn('filter-down-cost')}>
            <p className={`${activeItem == 'filter-down-cost' ? 'text-slate-600' : 'text-gray-400'}`}>По убыванию цены</p>
          </div>
          <div className={`${activeItem == 'filter-comment' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  flex items-center justify-center p-2`} onClick={() => filterBtn('filter-comment')}>
            <p className={`${activeItem == 'filter-comment' ? 'text-slate-600' : 'text-gray-400'}`}>По отзывам гостей</p>
          </div>
          <div className={`${activeItem == 'filter-star' ? activeClass : 'bg-white border-gray-300/50 '} cursor-pointer border  rounded-r-md flex items-center justify-center p-2`} onClick={() => filterBtn('filter-star')}>
            <p className={`${activeItem == 'filter-star' ? 'text-slate-600' : 'text-gray-400'}`}>Количество звёзд</p>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <div className='grid grid-cols-4 gap-3'>
          <div>
            <p className='mb-1 text-slate-500'>
              Количество звёзд объекта (от/до):
            </p>
            <div className='flex justify-between'>
              <div className='w-1/2 mr-2'>
                <MySelect placeholder='1 *' classNamePrefix='base-select' />
              </div>
              <div className='w-1/2 '>
                <MySelect placeholder='5 *' classNamePrefix='base-select' />
              </div>
            </div>
          </div>
          <div >
            <p className='mb-1 text-slate-500'>
              Оценка по отзывам (от/до):
            </p>
            <div className='flex justify-between'>
              <div className='w-1/2 mr-2'>
                <MySelect placeholder='0' classNamePrefix='base-select' />
              </div>
              <div className='w-1/2 '>
                <MySelect placeholder='0' classNamePrefix='base-select' />
              </div>
            </div>
          </div>
          <div>
            <p className='mb-1 text-slate-500'>
              Питание:
            </p>
            <div className='w-3/4 '>
              <MySelect placeholder='Выбрать' classNamePrefix='base-select' />
            </div>
          </div>
          <div>
            <div className='flex items-center relative mb-1'>
              <p className='mb-0 text-slate-500'>
                Бесплатная отмена бронирования
              </p>


              <div className='tooltipWithSvg'>
                {/* opacity 0 berib svg hover bo`lganda opacity 1 qilish kerak */}
                {/* <div className='absolute bg-white rounded-md -top-60 -right-11 shadow-md z-10 p-3'>
                  <div className='absolute h-8 w-8 z-20 bg-white rotate-45 shadow-md -bottom-3.5 right-10' ></div>
                  <p className='m-0 text-base text-gray-500'>
                    Для того чтобы обезопасить себя на случай непредвиденных обстоятельств,
                    которые приведут к отмене бронирования,
                    советуем вам включить функцию бесплатной отмены бронирования.
                    В этом случаи гостиница не будет взымать деньги за отмену брони.
                  </p>
                </div> */}
                <Image
                  src='/tooltip.svg'
                  className='cursor-pointer ml-2'
                  width='14'
                  height='14'
                  alt=''
                />
              </div>
            </div>
            <div>
              <MyButton className='bg-green-color text-white px-3 py-2 me-2 rounded-md mr-2'>Да</MyButton>
              <MyButton className='bg-gray-400 text-white px-3 py-2 rounded-md'>Нет</MyButton>
            </div>
          </div>
        </div>
      </div>
      {
        isAdditionView && <div className='additional__filter mt-4'>
          <div className="grid grid-cols-3 gap-1">
            <div>
              <p className='mb-1 text-slate-500'>
                Доступ в интернет
              </p>
              <div className='w-3/4 '>
                <MySelect placeholder='Да, бесплатно' classNamePrefix='base-select' />
              </div>
            </div>
            <div>
              <p className='mb-1 text-slate-500'>
                Где?
              </p>
              <div className='w-3/4 '>
                <MySelect placeholder='В номере' classNamePrefix='base-select' />
              </div>
            </div>
            <div>
              <p className='mb-1 text-slate-500'>
                Выберите тип парковки
              </p>
              <div className='w-3/4 '>
                <MySelect placeholder='Крытая автостоянка' classNamePrefix='base-select' />
              </div>
            </div>
          </div>
          <p className='mt-5 text-slate-500'>
            Дополнительные услуги и удобства
          </p>
          <div className='comfort__services--box flex items-center flex-wrap mt-3'>
            {
              comfortServicesName.map((item, idx) => {
                const thisIsActive = isActiveTagArray.find(e => e === item)
                return (
                  <div
                    onClick={() => addOrRemoveTagFromArray(item)}
                    className={`cursor-pointer rounded px-4 py-2 mb-2 mr-2 ${thisIsActive ? 'bg-green-400 text-white' : 'bg-gray-300/25'}`}
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
          <div className='flex items-center w-[30%] mt-2'>
            <MyInput
              type='text'
              myClass='mr-2 py-2 border'
              placeholder='Пишите свой вариант'
            />
            <MyButton className='bg-blue-color text-white rounded py-2 px-4'>
              Добавить
            </MyButton>
          </div>
        </div>
      }
      <div className='flex items-center mt-7'>
        {
          isAdditionView
            ? <p className='flex items-center text-red-600 cursor-pointer mr-3' onClick={() => setIsAdditionView(!isAdditionView)}>
              Скрыть фильтры
              <Image
                src='/arrow-up-not-stick.svg'
                className='ml-2'
                width='12'
                height='8'
                alt=''
              />
            </p>
            : <p className='flex items-center text-sky-600 cursor-pointer mr-3' onClick={() => setIsAdditionView(!isAdditionView)}>
              Все параметры
              <Image
                src='/arrow-down-not-stick.svg'
                className='ml-2'
                width='12'
                height='8'
                alt=''
              />
            </p>
        }
        <p className='flex items-center text-sky-600 cursor-pointer me-3' onClick={() => setMode(!mode)}>
          <Image
            src='/durbin.svg'
            className='mr-2'
            width='15'
            height='10'
            alt=''
          />
          {
            mode ? 'В режим карты' : 'В обычный режим'
          }
        </p>
        <p className='text-gray-400 ml-2 flex items-center cursor-pointer'>
          Сбросить
          <Image
            src='/resetX.svg'
            className='ml-2'
            width='12'
            height='11'
            alt=''
          />
        </p>
      </div>
    </div>
  )
}
