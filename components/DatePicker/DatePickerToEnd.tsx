'use client'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { IOptions, MySelect } from "components/Select"
import { SingleValue } from 'react-select'
import { IBooking } from './DatePicker'

interface IDatePickerToEnd {
  startBookingState: IBooking,
  finishBookingState: IBooking,
  setFinishBookingState: (arg: IBooking) => void
}

export const DatePickerToEnd = (props: IDatePickerToEnd) => {
  const { startBookingState, finishBookingState, setFinishBookingState } = props

  // o`zgarmas constantalar
  const months = moment.months() // ['January'...'December']
  const currentYear = new Date().getFullYear() // 2023

  // select orqali qaysidur oyni indexini tanliman va o`sha tanlagan oyimning indexi orqali days lar menga keladi
  const [selectedMonth, setSelectedMonth] = useState<number>(0) // 1,2,3,4
  // monthga qarab dynamic o`zgaradi
  const days = Array.from({ length: moment(`${currentYear}-${selectedMonth}`).daysInMonth() }, (x, i) => moment().startOf('month').add(i, 'days').format('DD')) //['01','02...]
  // days ni map qilib optionDays ga value va labellarni qo``yib chiqdim.Sababi selectga shunaqa array kerak
  const optionDays: IOptions[] = days.map(item => ({ value: item, label: item }))// [{value:'01',label:'01'}]
  // months ni map qilib optionDays ga value va labellarni qo``yib chiqdim.Sababi selectga shunaqa array kerak
  const optionMonths: IOptions[] = months.map(item => ({ value: item, label: item })) // [{value:'January',label:'January'}]
  // option (days,months) ni to`gridan to`gri change qilmaslik uchun boshqa state hosil qilib option daysdan clone oldim
  const [changedDays, setChangedDays] = useState<IOptions[]>(optionDays)
  const [changedMonths, setChangedMonths] = useState<IOptions[]>(optionMonths)

  // useEffect DataPickerToStart dagi tanlagan month imizga qarab ishlaydi 
  useEffect(() => {
    if (startBookingState.month) {
      // Startda belgilagan month imni indeksini topib olish uchun
      const findIndexFromArrayMonths = Number(months.findIndex(e => e === startBookingState.month)) // 0,1,2,3
      // Kegin index orqali changedMonths arrayni slice qilaman
      setChangedMonths([...optionMonths].slice(findIndexFromArrayMonths))
      // Tanlagan oyimni index ini selectedMonthga saqlab quyaman
      setSelectedMonth(findIndexFromArrayMonths + 1)
    }
  }, [startBookingState])

  // useEffect DataPickerToStart dagi tanlagan day imizga qarab ishlaydi
  useEffect(() => {
    if (startBookingState.day) {
      // months[selectedMonth - 1] === startBookingState.month =>  bu masalan men 12 mart ni start da tanlagan bo`lsam finishda men 1-bo`lib oyni tekshirishim kerak. Agar mart bo`lsa changedDaysga 12martdan keyingi kunlarni quyaman.
      // yoki xozirgi oyim mart bo`lsayu men 12 aprelni tanlasam finishda changeDays 12 apreldan keyingi kunlarni kursatishi un
      // men finishda may ni tanlasam changeDays 01 dan boshlanishi kerak
      if (months[selectedMonth - 1] === startBookingState.month) {
        setChangedDays([...optionDays].slice(Number(startBookingState.day)))
      } else {
        setChangedDays([...optionDays])
      }
    }
  }, [startBookingState, selectedMonth])

  // day ni statega joylaydi
  const onChangeDays = (newValue: SingleValue<IOptions> | null) => {
    setFinishBookingState({ ...finishBookingState, day: newValue?.value || '' })
  }
  // month ni statega joylaydi

  const onChangeMonths = (newValue: SingleValue<IOptions> | null) => {
    const findIndexFromArrayMonths = Number(months.findIndex(e => e === newValue?.value))
    setSelectedMonth(findIndexFromArrayMonths + 1)
    setFinishBookingState({ ...finishBookingState, month: newValue?.value || '' })
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
      <div className='w-2/3'>
        <MySelect
          onChange={onChangeMonths}
          classNamePrefix='base-select'
          placeholder={months[selectedMonth - 1]}
          options={startBookingState.day && startBookingState.month ? changedMonths : []}
        />
      </div>
    </>
  )
}
