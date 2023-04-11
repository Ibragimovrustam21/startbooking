import { FC } from 'react'


type IButton = {
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const MyButton: FC<IButton> = ({ children, type, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  )
}