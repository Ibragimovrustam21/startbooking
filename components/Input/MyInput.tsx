interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  myClass?: string,
}

import { InputHTMLAttributes } from "react"

export const MyInput = ({ myClass, ...props }: IInput) => {
  return (
    <input
      className={`${myClass} block rounded px-2 text-font-color focus:outline-none`}
      {...props}
    />
  )
}
