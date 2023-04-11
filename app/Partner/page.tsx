import Image from "next/image";
import { MyButton } from "components/Button";
import PartnerImage1 from 'assets/partnerMain1.png'
import PartnerImage2 from 'assets/partnerMain2.png'
import Link from "next/link";
export default function Partner() {

  return (
    <div className="wrapper relative bg-page-color-2 min-h-screen flex items-center justify-center">
      <p className="absolute font-medium text-base right-10 top-10">
        Start Booking 2019. Все права защищены
      </p>
      <div className="absolute left-20 top-10 w-80 bg-white p-4 rounded">
        <p className="text-gray-color text-base mb-4">
          Внимание!
        </p>
        <p className="text-gray-color text-base">
          Во избежании проблем с настройкой и использованием аккаунтов, создавая партнёрский профиль,
          в дальнейшем вы сможете использовать его только для конкретных назначений
        </p>
      </div>
      <Image src={PartnerImage1} alt='' className="absolute bottom-0 left-20" />
      <Image src={PartnerImage2} alt='' className="absolute bottom-0 right-0" />
      <div className="text-center w-1/2">
        <p className="text-3xl font-medium my-4">Добро пожаловать!</p>
        <p className="text-lg text-font-color my-5">
          В этом экране вы можете добавить один или несколько объектов
          для последующей активации обьявлений
        </p>
        <Link href='/partner/add-object/first-step'>
          <MyButton className="bg-green-color text-white font-medium p-3 px-5 rounded-full">
            Добавить объект
          </MyButton>
        </Link>
      </div>
    </div>
  )
}
