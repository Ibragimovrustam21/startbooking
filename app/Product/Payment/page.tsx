'use client'
import { useState } from "react";
import { GoBack } from 'components/GoBack'
import { HotelHead } from 'components/HotelHead'
import { PaymentBox, PaymentInfoCards, PaymentModal, PlasticCard } from "modules/Product/Payment/components";
import { Modal } from "components/Modal";



export default function Payment() {
  const [isModalView, setIsModalView] = useState<boolean>(false)

  const showModal = () => {
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden'
    setIsModalView(true)
  }
  const hideModal = (arg: boolean) => {
    document.getElementsByTagName('html')[0].style.overflowY = 'visible'
    setIsModalView(false)
  }

  return (
    <>
      <Modal isModalView={isModalView} setIsModalView={setIsModalView}>
        <PaymentModal hideModal={hideModal} />
      </Modal>
      <div className="wrapper relative bg-page-color-2">
        <div className="pb-10" >
          <GoBack />
          <HotelHead />
          <p className="font-medium text-3xl my-7">
            Оплата
          </p>
          <div className="grid grid-cols-5 gap-10">
            <div className="col-span-3">
              <PaymentBox showModal={showModal} />
            </div>
            <div className="col-span-2">
              <PaymentInfoCards />
            </div>
          </div>
          <div>
            <p className="font-semibold text-font-color text-2xl mt-14">
              Мои карты:
            </p>
            <div className="flex mt-5">
              {
                [1, 2].map((item, idx) => {
                  return <PlasticCard key={idx} />
                })
              }
              <div className='w-80 h-52 flex items-center justify-center rounded-xl shadow-md bg-gray-200/25 cursor-pointer'>
                <svg width="85" height="84" viewBox="0 0 85 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="42.6264" cy="41.9184" r="41.7231" fill="#E8E8EE" />
                  <rect x="38.4541" y="16.8848" width="8.34463" height="50.0678" rx="4.17231" fill="#F6F6F9" />
                  <rect x="17.5926" y="46.0908" width="8.34462" height="50.0678" rx="4.17231" transform="rotate(-90 17.5926 46.0908)" fill="#F6F6F9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
