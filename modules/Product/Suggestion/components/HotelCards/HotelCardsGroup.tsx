'use client'
import { MyButton } from 'components/Button'
import { HotelCard } from './HotelCard'

export const HotelCardsGroup = () => {

  return (
    <div className='mt-4'>
      <div className="grid grid-cols-3 gap-4">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
            return (

              <div className="w-full mb-2">
                <HotelCard />
              </div>

            )
          })
        }
      </div>
      <div className='text-center mt-10 mb-4'>
        <MyButton className='bg-green-color text-white font-medium p-3 px-5 rounded-full'>
          Показать больще объявлений
        </MyButton>
      </div>
    </div>
  )
}
