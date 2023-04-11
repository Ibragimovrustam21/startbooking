import { GoBack } from 'components/GoBack'
import { HotelHead } from 'components/HotelHead'
import { RoomCardBox } from "modules/Product/SelectRoom/components";

export default function SelectRoom() {
  return (
    <div className="wrapper bg-page-color-2">
      <div className="pb-10" >
        <GoBack />
        <HotelHead />
        <RoomCardBox />
      </div>
    </div>
  )
}
