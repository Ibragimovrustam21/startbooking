'use client'
import { useEffect, useState } from "react";
import { AlertModal, MyObjectCard } from "modules/Partner/MyObject/components";

export default function MyObject() {
  const getLocalStorage = localStorage.getItem('showAlert')
  const parse = getLocalStorage && JSON.parse(getLocalStorage)
  const [showAlert, setShowAlert] = useState<boolean>(parse === false ? false : true)

  useEffect(() => {
    if (getLocalStorage) {
      localStorage.setItem('showAlert', 'false')
    } else {
      localStorage.setItem('showAlert', 'true')
    }
  }, [showAlert])

  return (
    <>
      <AlertModal showAlert={showAlert} setShowAlert={setShowAlert} />
      <div className="wrapper bg-page-color-2">
        <p className="font-medium text-3xl mb-7">
          Мои объекты
        </p>
        <p className="w-3/4 text-lg">
          Здесь хранятся все ваши объекты, которые вы регистрировали в нашем сервисе.
          Вы можете включать или выключать, а так же редактировать ваши текущие объявления
        </p>
        <div className="grid grid-cols-7 mt-8">
          <div>
            <p className='text-font-color font-medium text-lg'>Гостиницы</p>
          </div>
          <div className="col-span-5">
            <div className="mb-6">
              <MyObjectCard title='HYATT Regency Tashkent' />
            </div>
            <div className="mb-6">
              <MyObjectCard title='HYATT Regency Tashkent' />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 mt-5">
          <div>
            <p className='text-font-color font-medium text-lg'>Гостевые дома</p>
          </div>
          <div className="col-span-5">
            <div className="mb-6">
              <MyObjectCard title='Гостевой дом HYATT Regency Tashkent' otherType={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
