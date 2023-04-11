import Link from 'next/link'
import Image from 'next/image'

import person from 'assets/person.png'
import apple from 'assets/apple.png'
import googlePlay from 'assets/googlePlay.png'

export const Footer = () => {
  return (
    <div className='wrapper relative bg-footer-color'>
      <div className="footer">
        <div className="h-10 my-8">
          <p className='leading-6 text-5xl'>
            С нами удобнее!
          </p>
        </div>
        <div className='h-128'>
          <div className='grid grid-cols-7 m-0 h-full gap-5'>
            <div className="col-span-2">
              <p className='leading-5 mt-4'>
                Подпишитесь на рассылку и получайте новости от <strong>Start Booking</strong> первыми
              </p>
              <div className="mb-3 mt-4">
                <input
                  type="email"
                  className="w-full bg-transparent rounded-none border-b border-gray-300 p-2 focus:outline-none"
                  placeholder="Ваш e-mail"
                />
              </div>
              <div className='mt-20'>
                <div className='cursor-pointer mb-4 '>
                  <Image
                    src={googlePlay}
                    alt='googlePlay'
                  />
                </div>
                <div className="cursor-pointer">
                  <Image
                    src={apple}
                    alt='apple'
                  />
                </div>
              </div>
            </div>
            <div className="col-span-3 flex justify-center">
              <div>
                <div className='contact__box mt-4 mb-3'>
                  <p className='text-gray-color leading-6 mb-1'>
                    горячая линия
                  </p>
                  <p className='leading-6 font-medium'>
                    8 (916) 480-10-04
                  </p>
                </div>

                <div className='contact__box'>
                  <p className='text-gray-color leading-6 mb-1' >
                    почта
                  </p>
                  <p className='leading-6 font-medium'>
                    info@start.booking
                  </p>
                </div>

                <div className='menu__box mt-16'>
                  <ul className='p-0 list-none'>
                    <li className='mb-2'>
                      <Link href='/' className='text-font-color no-underline'>
                        Домой
                      </Link>
                    </li>
                    <li className='mb-2'>
                      <Link href='/' className='text-font-color no-underline'>
                        Мои брони
                      </Link>
                    </li>
                    <li className='mb-2'>
                      <Link href='/' className='text-font-color no-underline'>
                        Избранное
                      </Link>
                    </li>
                    <li className='mb-2'>
                      <Link href='/' className='text-font-color no-underline'>
                        Поддержка
                      </Link>
                    </li>
                    <li className='mb-2'>
                      <Link href='/' className='text-font-color no-underline'>
                        Контакты
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className='contact__box mt-4'>
                <p className='text-gray-color leading-6 mb-1'>
                  Офис компании
                </p>
                <p className='leading-6 font-medium'>
                  Suite 305, Griffith Corporate Centre <br />
                  P.O. Box 1510, <br />
                  Beachmont, Kingstown <br />
                  St. Vincent and the Grenadines
                </p>
              </div>
              <div className="social__icon--box flex mt-16">
                <Link href='#' className='mr-4'>
                  <div className="h-10 w-10 rounded-lg bg-twitter flex items-center justify-center">
                    <Image src='/twitter.svg' width='13' height='16' alt='' />
                  </div>
                </Link>
                <Link href='#' className='mr-4'>
                  <div className="h-10 w-10 rounded-lg bg-youtube flex items-center justify-center">
                    <Image src='/youtube.svg' width='19' height='16' alt='' />
                  </div>
                </Link>
                <Link href='#' className='mr-4'>
                  <div className="h-10 w-10 rounded-lg bg-facebook flex items-center justify-center">
                    <Image src='/facebook.svg' width='7' height='16' alt='' />
                  </div>
                </Link>
                <Link href='#' className='mr-4'>
                  <div className="h-10 w-10 rounded-lg bg-instagram flex items-center justify-center">
                    <Image src='/instagram.svg' width='15' height='16' alt='' />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='h-20'>
          <div className="grid grid-cols-5 m-0">
            <div>
              <p className='text-sm'>
                © 2019,  Start Booking™
              </p>
            </div>
            <div>
              <p className='text-sm'>
                Art Direction Anvar Rizaev
              </p>
            </div>
            <div>
              <p className='text-sm'>
                Соглашение о конфиденциальности
              </p>
            </div>
            <div className="col-span-2 relative">
              <Image
                src={person}
                className='absolute -top-48 -right-4'
                alt='person'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
