'use client'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { IOptions, MySelect } from "components/Select"
import { SingleValue } from 'react-select'
import { IBooking } from './DatePicker'

interface IDatePickerToStart {
  startBookingState: IBooking,
  setStartBookingState: (arg: IBooking) => void
}

export const DatePickerToStart = (props: IDatePickerToStart) => {
  const { startBookingState, setStartBookingState } = props
  // o`zgarmas constantalar
  const date = new Date()
  const months = moment.months() // ['january'...]
  const currentMonth = months[date.getMonth()] // 'March'
  const currentYear = new Date().getFullYear() // 2023

  const [selectedMonth, setSelectedMonth] = useState<number>(date.getMonth() + 1) // 1,2,3,4
  const days = Array.from({ length: moment(`${currentYear}-${selectedMonth}`).daysInMonth() }, (x, i) => moment().startOf('month').add(i, 'days').format('DD')) //['01','02...]

  const optionMonths: IOptions[] = months.map(item => ({ value: item, label: item })) // [{value:'January',label:'January'}]
  const optionDays: IOptions[] = days.map(item => ({ value: item, label: item }))// [{value:'01',label:'01'}]


  const [changedDays, setChangedDays] = useState<IOptions[]>(optionDays)
  const [changedMonths, setChangedMonths] = useState<IOptions[]>(optionMonths)


  useEffect(() => {
    // xozirgi oyni aniqlab slice qilamiz
    setChangedMonths(changedMonths.slice(date.getMonth()))
  }, [])

  useEffect(() => {
    // Agar xozirgi oy bo`lsa bugundan boshlab keyingi kunlarni changeDaysga joylaydi
    if (date.getMonth() + 1 === selectedMonth) {
      setChangedDays([...optionDays].slice(date.getDate())) // slice qilamiz
    } else {
      setChangedDays([...optionDays]) // 1dan boshlanib ketishi un
    }
  }, [selectedMonth])

  // day ni statega joylaydi
  const onChangeDays = (newValue: SingleValue<IOptions> | null) => {
    setStartBookingState({ ...startBookingState, day: newValue?.value || '' })
  }
  // month ni statega joylaydi
  const onChangeMonths = (newValue: SingleValue<IOptions> | null) => {
    const findIndexFromArrayMonths = Number(months.findIndex(e => e === newValue?.value))
    setSelectedMonth(findIndexFromArrayMonths + 1)
    setStartBookingState({ ...startBookingState, month: newValue?.value || '' })
  }

  return (
    <>
      <div className='w-1/3 mr-2'>
        <MySelect
          onChange={onChangeDays}
          classNamePrefix='base-select'
          placeholder='День'
          options={changedDays}
        />
      </div>
      <div className='w-2/3 '>
        <MySelect
          onChange={onChangeMonths}
          classNamePrefix='base-select'
          placeholder={currentMonth}
          options={changedMonths}
        />
      </div>
    </>
  )
}
