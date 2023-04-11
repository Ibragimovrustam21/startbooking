'use client'
import Image from "next/image"

export const GoBack = () => {
  const goBackHandler = () => {
    return history.back()
  }

  return (
    <div className='h-10 max-w-fit mb-2' onClick={goBackHandler}>
      <Image
        src='/arrow-left.svg'
        className='cursor-pointer'
        width='28'
        height='28'
        alt=''
      />
    </div>
  )
}
