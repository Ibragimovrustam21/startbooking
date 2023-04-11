import { useState } from "react"
import { DatePickerToEnd } from "./DatePickerToEnd"
import { DatePickerToStart } from "./DatePickerToStart"

export interface IBooking {
  day: string,
  month: string,
  currentYear: string
}

export const DatePicker = () => {
  const [startBookingState, setStartBookingState] = useState<IBooking>({
    day: '',
    month: '',
    currentYear: String(new Date().getFullYear())
  })

  const [finishBookingState, setFinishBookingState] = useState<IBooking>({
    day: '',
    month: '',
    currentYear: String(new Date().getFullYear())
  })

  return (
    <div>
      <p className="text-sm text-gray-500 mb-1">
        Дата заезда:
      </p>
      <div className='flex items-center justify-between mb-2'>
        <DatePickerToStart
          startBookingState={startBookingState}
          setStartBookingState={setStartBookingState}
        />
      </div>
      <p className="text-sm text-gray-500 mb-1">
        Дата выезда:
      </p>
      <div className='flex items-center justify-between'>
        <DatePickerToEnd
          startBookingState={startBookingState}
          finishBookingState={finishBookingState}
          setFinishBookingState={setFinishBookingState}
        />
      </div>
    </div>
  )
}
