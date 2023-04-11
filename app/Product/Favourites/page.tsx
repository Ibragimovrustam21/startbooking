import { HotelCardsGroup } from 'modules/Product/Suggestion/components'

export default function Favourites() {
  return (
    <div className="wrapper bg-page-color-2">
      <div className="pb-10" >
        <p className='font-medium text-black-700 text-3xl mb-7' >
          Избранное
        </p>
        <p className='font-medium text-black-700 w-96'>
          Здесь хранятся все актуальные и не актуальные объявления которые вы сохранили ранее
        </p>
        <HotelCardsGroup />
      </div>
    </div>
  )
}
