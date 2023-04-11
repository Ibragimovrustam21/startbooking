'use client'
import { Modal } from 'components/Modal'
import { UserHead } from 'components/UserHead'
import { useState } from 'react'
import { CreateNewCard, MyCards, UserPaymentModal } from 'modules/User/Payment/components'
import { ProfileCard } from 'modules/User/Profile/components'


export default function Payment() {
  const [isModalView, setIsModalView] = useState<boolean>(false)

  return (
    <>
      <Modal isModalView={isModalView} setIsModalView={setIsModalView} >
        <UserPaymentModal />
      </Modal>
      <div className="wrapper bg-page-color-2 min-h-screen">
        <UserHead />
        <div className="grid grid-cols-9 gap-5 mt-7">
          <div className="col-span-3">
            <ProfileCard />
          </div>
          <div className="col-span-6">
            <div className='bg-white rounded-xl p-5'>
              <MyCards />
            </div>
            <div className='bg-white rounded-xl p-5 mt-6'>
              <CreateNewCard setIsModalView={setIsModalView} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
