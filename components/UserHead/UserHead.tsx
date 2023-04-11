'use client'
import Image from "next/image"
import { usePathname } from "next/navigation"

export const UserHead = () => {
  const path = usePathname()
  const pathNameArr: string[] = path.split('/').slice(1)

  return (
    <div className="flex items-center">
      <p className="font-medium text-3xl" >
        Профиль
      </p>

      {pathNameArr && pathNameArr.map((item, idx) => {
        if (item === 'user' || item === 'profile') {
          return
        }

        return (
          <div className="flex items-center" key={idx}>
            <Image src='/arrowRightNotStick.svg' width='12' height='20' className='mx-3 mt-1' alt='' />
            <p className="flex items-center capitalize font-medium text-3xl">
              {item}
            </p>
          </div>
        )
      })}
    </div>
  )
}
