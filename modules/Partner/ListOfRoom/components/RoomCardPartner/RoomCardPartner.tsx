import { CardCarousel } from "components/CardCarousel"
import Image from "next/image"
import Link from "next/link"

export const RoomCardPartner = () => {
  return (

    <div className="room-card border rounded-xl bg-white p-4 mt-3">
      <div className="flex items-center justify-between">
        <div>
          <p className='font-medium text-font-color text-2xl mb-2'>
            Двухместный люкс
          </p>
          <p className='text-gray-color mb-3'>
            HYATT Regency Tashkent
          </p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="text-center text-font-color rounded-md font-medium px-3 py-1 bg-page-color-2">34 <br /> номера</p>
        </div>
      </div>
      <div className=' overflow-hidden mb-3'>
        <CardCarousel />
      </div>
      <p className='text-gray-color mb-1'>
        Описание номера:
      </p>
      <p className='text-font-color mb-3'>
        Курение - Для курящих <br />
        Кровать - двуспальная (King size) <br />
        Квадратура - 41м2
      </p>
      <p className='text-gray-color mb-1'>
        Стоимость проживания:
      </p>
      <p className='text-3xl mb-4 mr-2'>
        75$ в сутки <span className='text-sm text-gray-color'>доп. 20% НДС</span>
      </p>
      <div className="flex justify-between items-center">
        <p className='flex items-center text-blue-color cursor-pointer'>
          <Image src='/pencil.svg' className="mr-2" alt='' width='9' height='11' />
          Редактировать
        </p>
        <p className='flex items-center text-red-400 cursor-pointer'>
          <Image src='/crash.svg' className="mr-2" alt='' width='9' height='11' />
          Удалить
        </p>
      </div>
    </div>
  )
}
