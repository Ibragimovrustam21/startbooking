'use client'
import { useState } from "react";
import { Loader } from "components/Loader";
import { UserHead } from "components/UserHead";
import { EditOrAddRoom } from "modules/Partner/EditOrAdd/components";
import { MyButton } from "components/Button";

export default function EditAndAdd() {
  const [isLoaderView, setIsLoaderView] = useState<boolean>(false)

  const showModal = () => {
    document.getElementsByTagName('html')[0].style.overflowY = 'hidden'
    setIsLoaderView(true)
  }
  const hideModal = (arg: boolean) => {
    document.getElementsByTagName('html')[0].style.overflowY = 'visible'
    setIsLoaderView(arg)
  }

  return (
    <>
      <Loader title="Сохраняем изменения..." isLoaderView={isLoaderView} setIsLoaderView={hideModal} />
      <div className="wrapper bg-page-color-2 min-h-screen">
        <UserHead />
        <EditOrAddRoom />
        <div className="text-center my-8">
          <MyButton className="bg-green-color text-white font-medium p-3 px-20 rounded-full" onClick={showModal}>
            Сохранить новые параметры
          </MyButton>
        </div>
      </div>
    </>
  )
}
