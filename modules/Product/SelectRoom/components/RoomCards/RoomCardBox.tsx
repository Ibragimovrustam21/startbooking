import { MyButton } from "components/Button"
import { RoomCard } from "./RoomCard"

export const RoomCardBox = () => {
  return (
    <>
      <div className="mt-2 grid grid-cols-3 gap-3">
        {
          [1, 2, 3, 4, 5, 6].map((item, idx) => {
            return <RoomCard key={idx} />
          })
        }
      </div>
      <div className='text-center mt-10 mb-4'>
        <MyButton className='bg-green-color text-white font-medium p-3 px-5 rounded-full'>
          Показать больще объявлений
        </MyButton>
      </div>
    </>

  )
}
