import Image from 'next/image'
import hotelImage from 'assets/hotelImage.png'

export const BookingRoomCard = () => {
  return (
    <div className='bg-white h-96 rounded-xl p-4'>
      <div className='grid grid-cols-2'>
        <div className='mr-4'>
          <p className='font-medium text-font-color text-2xl mb-2'>
            Двухместный люкс
          </p>
          <p className='text-gray-color mb-4'>
            HYATT Regency Tashkent
          </p>
          <div className='h-52 overflow-hidden mb-3'>
            <Image
              src={hotelImage}
              className='w-full h-full rounded'
              alt='hotel-room'
            />
          </div>
          <p className='mb-3 mt-5 text-font-color'>
            Бесплатная отмена бронирования до 20 октября.
          </p>
        </div>
        <div>
          <p className='text-gray-color mb-1 mt-2'>
            Описание номера:
          </p>
          <p className='text-font-color my-3'>
            Двухместный люкс на 3-ем этаже с отличным видом на центр города из балкона.
            В номере присутствует большая двухместная кровать размера King-size.
            Номер отлично подойдет молодожёнам и супругам.
          </p>
          <div className="py-2">
            <p className='font-semibold text-font-color mb-1'>
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
          <div className='bg-gray-300 p-2 flex items-center justify-center rounded-lg my-2'>
            <p className='text-font-color'>
              с 12 откбря по 24 октября
            </p>
          </div>
          <div className='flex items-center justify-between mt-5'>
            <a href='#' className='text-blue-color'>
              Скачать ваучер
            </a>
            <p className='text-red-700 flex items-center'>
              Отменить бронирование
              <Image
                src='/cancel.svg'
                className="ml-2"
                width='10'
                height='10'
                alt=''
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
