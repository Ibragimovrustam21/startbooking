import { Modal } from "components/Modal"
import Image from "next/image"
import { useState } from "react"
import { MyButton } from "components/Button"
import AlertImage from 'assets/alert.png'

interface IAlertModal {
  showAlert: boolean,
  setShowAlert: (arg: boolean) => void
}

export const AlertModal = ({ showAlert, setShowAlert }: IAlertModal) => {
  const [isModalView, setIsModalView] = useState(showAlert)

  return (
    <Modal isModalView={isModalView} setIsModalView={setIsModalView}>
      <div className="text-center">
        <p className="text-3xl my-8"> Дружим с интерфейсом!</p>
        <div className="bg-gray-700 rounded-md">
          <Image src={AlertImage} alt='' />
        </div>
        <p className="w-3/4 m-auto text-xl text-center text-font-color my-8">
          Похоже вы только что зарегистрировали вашу гостиницу на нашем сервисе. Осталось заполнить её номерами 😉
        </p>
        <MyButton className="bg-green-color text-white font-medium p-3 px-10 rounded-full" onClick={() => {
          setShowAlert(false)
          setIsModalView(false)
        }}>
          Я научился!
        </MyButton>
      </div>
    </Modal>
  )
}
