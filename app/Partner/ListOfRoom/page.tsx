import { RoomCardPartner } from "modules/Partner/ListOfRoom/components"

export default function ListOfRoom() {
  return (
    <div className='wrapper bg-page-color-2'>
      <p className="font-medium text-3xl mb-7">
        Список номеров
      </p>
      <p className="w-3/4 text-lg">
        Здесь представлен весь список номеров гостиницы HYATT Regency Tashkent.
        Вы можете вносить изменения в этот список добавляя или удаляя номера. А так же вносить изменения в уже представленные номера
      </p>
      <div className="mt-8 flex flex-wrap justify-between">
        {
          [1, 2, 3, 4].map((item, idx) => {
            return (
              <div className="w-[32%] mr-2">
                <RoomCardPartner key={idx} />
              </div>
            )
          })

        }
      </div>
    </div>
  )
}
