
export const Calculating = () => {
  return (
    <div className="h-96 p-4 bg-white rounded-xl">
      <p className="text-font-color font-semibold text-xl">
        Рассчёт стоимости
      </p>
      <div className="mt-8">
        <div className="flex mb-4">
          <p className="min-w-fit">
            75 $ x 12 ночи
          </p>
          <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
          <p className="min-w-fit">
            900 $
          </p>
        </div>
        <div className="flex mb-4">
          <p className="min-w-fit">
            10%ная скидка на неделю
          </p>
          <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
          <p className="min-w-fit">
            -90 $
          </p>
        </div>
        <div className="flex mb-4">
          <p className="min-w-fit">
            НДС 20%
          </p>
          <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
          <p className="min-w-fit">
            180 $
          </p>
        </div>
        <div className="flex mb-4 border-b border-gray-500/100 pb-5 ">
          <p className="min-w-fit font-semibold">
            Итого к оплате
          </p>
          <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
          <p className="min-w-fit font-semibold">
            990 $
          </p>
        </div>
        <div className="flex mb-4 pt-4">
          <p className="min-w-fit text-emerald-700 font-semibold">
            Оплачено
          </p>
          <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
          <p className="min-w-fit text-emerald-700 font-semibold">
            245 $
          </p>
        </div>

        <div className="flex mb-2">
          <p className="min-w-fit">
            К оплате 24 октября 2019
          </p>
          <div className="border-b w-full border-gray-300/100 h-4.5 mx-1"></div>
          <p className="min-w-fit">
            742 $
          </p>
        </div>
      </div>
    </div>
  )
}
