import Image from 'next/image'
import React from 'react'
import { MyButton } from 'components/Button'
import ModalImage from 'assets/paymentModal.png'

interface IPaymentModal {
  hideModal: (arg: boolean) => void
}

export const PaymentModal = ({ hideModal }: IPaymentModal) => {
  return (
    <>
      <p className='text-3xl text-font-color my-5'>
        Забронировано!
      </p>
      <div className="flex justify-center my-3">
        <Image
          src={ModalImage}
          className=""
          alt='payment-modal'
        />
      </div>
      <p className='text-font-color w-3/4 m-0 m-auto'>
        Вы успешно забронировали номер в гостинице HYATT Regency Tashkent.
        В скором времени с вами свяжется администратор отеля
      </p>
      <div className='text-center mt-5 mb-4'>
        <MyButton
          className='bg-green-color text-white font-medium p-3 px-5 rounded-full'
          onClick={() => hideModal(false)}
        >
          Продолжить
        </MyButton>
      </div>
    </>
  )
}
