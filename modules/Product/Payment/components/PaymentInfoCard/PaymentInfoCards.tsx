import Image from "next/image"

export const PaymentInfoCards = () => {
  return (
    <>
      <div className="h-44 bg-blue-500 text-white py-6 px-8 rounded-md">
        <p className="flex items-center justify-between text-2xl mt-5">
          К оплате сейчас:
          <Image
            src='/info.svg'
            width='24'
            height='24'
            alt=''
          />
        </p>
        <p className="text-4xl mt-8 text-white">
          247.5 $
        </p>
      </div>
      <div className="h-64 bg-white py-6 px-8 rounded-md mt-4">
        <p className="text-2xl font-semibold mt-3">
          Бесплатная отмена брони
          до 20 октября.
        </p>
        <p className="text-lg mt-7">
          При отмене брони на объект не позднее чем за 7 дней вы получите возврат в размере полной суммы предоплаты
        </p>
      </div>
    </>
  )
}
