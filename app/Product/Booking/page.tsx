import { GoBack } from 'components/GoBack'
import { HotelHead } from 'components/HotelHead'
import { BookingInfo } from "modules/Product/Booking/components";

export default function Booking() {
  return (
    <div className="wrapper bg-page-color-1">
      <div className="pb-10" >
        <GoBack />
        <HotelHead />
        <BookingInfo />
      </div>
    </div>
  )
}
