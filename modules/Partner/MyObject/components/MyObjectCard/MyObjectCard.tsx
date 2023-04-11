import { CardCarousel } from "components/CardCarousel"
import Image from "next/image"
import { MyButton } from "components/Button"
interface IMyObjectCard {
  title: string,
  otherType?: boolean
}
export const MyObjectCard = ({ title, otherType }: IMyObjectCard) => {
  return (
    <div className="bg-white rounded-3xl shadow-md">
      <div className="flex p-4 ">
        <div className="w-[45%]">
          <p className="text-xl text-font-color mb-2 font-medium">{title}</p>
          <div className="flex items-end mr-2">
            <div className='pr-3 border-r border-gray-500/25 flex items-center'>
              <Image src='/star.svg' width='18' height='18' className='mr-1' alt='' />
              <p className='text-orange-300 font-medium mb-0'>
                3.5
              </p>
            </div>
            <div className='flex items-center ml-1'>
              <Image src='/like.svg' width='18' height='18' className='ml-2 mr-1' alt='' />
              <p className='text-blue-color font-medium mb-0'>
                9.5
              </p>
            </div>
            <p className='text-gray-400 text-sm ml-2'>
              6 оценок от гостей
            </p>
          </div>
          <CardCarousel />
        </div>
        <div className="w-[55%] px-4">
          <div className={`flex ${otherType ? 'justify-end' : 'justify-between'}  items-center cursor-pointer`}>
            <p className={`flex ${otherType && 'mr-8'} items-center text-blue-color`}>
              <Image src='/pencil.svg' className="mr-2" alt='' width='9' height='11' />
              Редактировать
            </p>
            <p className={`flex items-center text-red-400`}>
              <Image src='/crash.svg' className="mr-2" alt='' width='9' height='11' />
              Удалить
            </p>
            {
              !otherType && <p className="text-font-color">
                Список номеров отеля
              </p>
            }

          </div>
          <p className="text-gray-400 mb-1 mt-10">Ориентир:</p>
          <p className="text-font-color mb-4">2 км от Чарвакское водохранилище</p>
          <p className="mb-4">
            Роскошный отель Hyatt Regency Tashkent расположен в самом центре города Ташкент. К услугам гостей вращающийся ресторан, крытый бассейн ...
          </p>
          {
            otherType
              ? <div>
                <p className="text-gray-400 mb-4">Статус</p>
                <p className="bg-green-color text-xl text-white text-center px-3 py-2 rounded-md w-1/2">
                  Свободно
                </p>
              </div>
              : <div className="flex justify-between">
                <div>
                  <p className="text-gray-400 mb-2">Количество номеров</p>
                  <div className="rounded-md text-center bg-page-color-2 w-[5rem] py-2">
                    <p className="text-font-color text-lg font-medium">126</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 mb-2">Количество занятых номеров</p>
                  <div className="rounded-md text-center bg-page-color-2 w-[5rem] py-2">
                    <p className="text-font-color text-lg font-medium">34</p>
                  </div>
                </div>
              </div>
          }
        </div>
      </div>
      {
        otherType
          ? <MyButton className="w-full bg-red-500 text-white text-lg p-3 px-20  rounded-t-0 rounded-b-3xl">
            Активировать объявление
          </MyButton>
          : <MyButton className="w-full bg-green-color text-white text-lg p-3 px-20  rounded-t-0 rounded-b-3xl">
            Активно
          </MyButton>
      }
    </div>
  )
}
