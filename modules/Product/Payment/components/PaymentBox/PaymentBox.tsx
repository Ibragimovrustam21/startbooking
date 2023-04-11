import Image from "next/image"
import { MyButton } from "components/Button"
import { MyInput } from "components/Input"
import { MyNumberInput } from "components/Input/MyNumberInput"

interface IPaymentBox {
  showModal: (arg: boolean) => void
}
export const PaymentBox = ({ showModal }: IPaymentBox) => {

  return (
    <div className="bg-white min-h-fit h-126 rounded-md p-8">
      <p className="font-semibold mt-5 text-2xl text-font-color">
        Перевод средств
      </p>
      <div className="flex items-center my-8">
        <div className="flex items-center mr-5 ">
          <input checked
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-sm font-medium text-font-color cursor-pointer"
          >
            Банковской картой
          </label>
        </div>
        <div className="flex items-center ">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:outline-none"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-sm font-medium text-font-color cursor-pointer"
          >
            Другой способ
          </label>
        </div>
      </div>
      <div className="flex items-end grid grid-cols-5 gap-3">
        <div className="col-span-2">
          <p className="mb-2 font-medium text-sm text-slate-600">
            Номер карты
          </p>
          <div className="relative">
            <MyNumberInput
              type="number"
              maxLength={16}
              placeholder="XXXX  XXXX  XXXX  XXXX"
              myClass="py-2 bg-page-color-2 px-8 w-full"
            />
            <Image
              className="absolute left-2 top-3"
              src='/card.svg'
              alt=""
              width='18'
              height='18'
            />

          </div>
        </div>
        <div>
          <p className="mb-2 font-medium text-sm text-slate-600">
            Срок действия
          </p>
          <MyInput
            type="text"
            placeholder="ММ / ГГ"
            myClass="py-2 bg-page-color-2 w-full"
          />
        </div>
        <div className="flex items-center col-span-2 mb-2">
          <input
            id="create-new-card"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:outline-none"
          />
          <label
            htmlFor="create-new-card"
            className="ml-2 text-sm font-medium text-slate-500 focus:outline-none cursor-pointer"
          >
            Сохранить новую карту
          </label>
        </div>
      </div>
      <div className="flex items-center grid grid-cols-5 gap-3 mt-8">
        <div className="col-span-2">
          <p className="mb-2 font-medium text-sm text-slate-600">
            Держатель карты
          </p>
          <div className="relative">
            <MyInput
              type="text"
              placeholder="Имя Фамилия"
              myClass="py-2 bg-page-color-2 px-8 w-full"
            />
            <Image
              className="absolute top-3 left-2"
              src='/user.svg'
              alt=""
              height='18'
              width='18'
            />
          </div>
        </div>
        <div>
          <p className="mb-2 font-medium text-sm text-slate-600">
            CVC
          </p>
          <MyNumberInput
            type="number"
            maxLength={3}
            placeholder="XXX"
            myClass="py-2 bg-page-color-2 w-full"
          />
        </div>
        <div className="col-span-2">
          <p className="mb-2 font-medium text-sm text-slate-600">
            Назовите новую карту
          </p>
          <MyInput
            type="text"
            placeholder="Например Альфа-Онлайн"
            myClass="py-2 bg-page-color-2 w-full"
          />
        </div>
      </div>
      <MyButton
        className="bg-orange-400 text-white px-9 py-3 rounded mt-10"
        onClick={() => showModal(true)}
      >
        Бронировать
      </MyButton>
    </div>
  )
}
