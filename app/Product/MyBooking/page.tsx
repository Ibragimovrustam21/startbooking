import { BookingRoomCard, Calculating } from "modules/Product/MyBooking/components";
import { useTranslation } from 'next-i18next'

export default function MyBooking() {
  const { t } = useTranslation('booking')
  return (
    <div className="wrapper bg-page-color-2">
      <p className="font-medium text-3xl mb-7">
        {/* Мои брони */}
        {t('Мои брони')}
      </p>
      <p className="w-1/2">
        Здесь список всехваших забронированны объектов, включающий в себя актуальную информацию по оплате и срокам
      </p>
      <div className="grid grid-cols-5 gap-4 mt-5 mb-3">
        <div className="col-span-3">
          <BookingRoomCard />
        </div>
        <div className="col-span-2">
          <Calculating />
        </div>
      </div>
    </div>
  )
}
