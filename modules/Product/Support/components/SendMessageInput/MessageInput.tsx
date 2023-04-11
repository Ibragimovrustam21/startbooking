import Image from "next/image"
import { MyInput } from "components/Input"

export const MessageInput = () => {
  return (
    <div className="relative">
      <MyInput
        type='text'
        placeholder="Сообщение..."
        myClass="py-3 bg-page-color-1 border w-full"
      />
      <Image
        src='/send.svg'
        className="absolute top-3 right-4 cursor-pointer"
        width='26'
        height='26'
        alt=''
      />
    </div>
  )
}
