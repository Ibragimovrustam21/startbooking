'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../assets/Logo.png'
import { usePathname } from 'next/navigation'
import { MyButton } from 'components/Button'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n'

interface ISidebar {
  params?: { lng: string }
}


export const SideBar = () => {
  const { t } = useTranslation('sidebar')

  const [drawer, setDrawer] = useState<boolean>(false)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [isPartnerPage, setIsPartnerPage] = useState<boolean>(false)
  const path = usePathname().split('/').slice(1)
  const isActiveLink = path.find(e => e === (path[1] && path[1] || ''))

  const onClickHandler = () => {
    setDrawer(!drawer)
  }

  useEffect(() => {
    if (path[0] == 'partner') {
      setIsPartnerPage(true)
    }
  }, [])

  function changeLanguage(lang: string): void {
    i18n.changeLanguage(lang);
    // const currentPath = window.location.pathname;
    // const currentLang = currentPath.split('/')[1]; // extract current language code from path
    // const newPath = `/${lang}${currentPath.substring(3)}${window.location.search}`;
    // window.history.pushState({ path: newPath }, '', newPath);
  }
  return (
    <>
      {
        drawer && <div className='drawer__background absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-50 z-20' onClick={() => setDrawer(!drawer)} />
      }
      <div className={`sidebar__drawer bg-white fixed top-0 bottom-0 left-0 p-12 z-30 ${drawer ? 'translate-x-0 transition duration-300 linear' : '-translate-x-full transition duration-300 linear'}`}>
        <div className='drawer__closeIcon absolute top-4 right-4 cursor-pointer' onClick={() => setDrawer(!drawer)}>
          <Image
            src='/close.svg'
            width='24'
            height='25'
            alt=''
          />
        </div>
        <p className='text-blue-color font-medium text-3xl my-5'>
          Start <br /> Booking
        </p>
        <ul className='drawer__menu p-0 my-10 list-none'>
          <li className='text-2xl mb-8'>
            {
              isPartnerPage
                ? <Link
                  href='/partner/add-object/first-step'
                  className={`${isActiveLink === 'add-object' && 'border-b-2 border-green-color'} text-gray-900 py-2`}
                  onClick={onClickHandler}
                >
                  Добавить объект

                </Link>
                : <Link
                  href='/'
                  className={`${isActiveLink === '' && 'border-b-2 border-green-color'} text-gray-900 py-2`}
                  onClick={onClickHandler}
                >
                  {t('home')}
                </Link>
            }
          </li>
          <li className='text-2xl mb-8'>
            {
              isPartnerPage
                ? <Link
                  href='partner/my-object'
                  className={`${isActiveLink === 'my-object' && 'border-b-2 border-green-color'} text-gray-900 py-2`}
                  onClick={onClickHandler}
                >
                  Мои объекты
                </Link>
                : <Link
                  href='/product/my-booking'
                  className={`${isActiveLink === 'my-booking' && 'border-b-2 border-green-color'} text-gray-900 py-2`}
                  onClick={onClickHandler}
                >
                  {t('my-booking')}
                </Link>
            }
          </li>
          <li className='text-2xl mb-8'>
            {
              isPartnerPage
                ? <Link
                  href='/partner/calendar'
                  className={`${isActiveLink === 'favourites' && 'border-b-2 border-green-color'} text-gray-900 py-2`}
                  onClick={onClickHandler}
                >
                  Календарь
                </Link>
                : <Link
                  href='/product/favourites'
                  className={`${isActiveLink === 'favourites' && 'border-b-2 border-green-color'} text-gray-900 py-2`}
                  onClick={onClickHandler}
                >
                  Избранное
                </Link>
            }
          </li>
          <li className='text-2xl mb-8'>
            <Link
              href='/product/support'
              className={`${isActiveLink === 'support' && 'border-b-2 border-green-color'} text-gray-900 py-2`}
              onClick={onClickHandler}
            >
              Поддержка
            </Link>
          </li>
          <li className='text-2xl mb-8'>
            <Link
              href='/product/contact'
              className={`${isActiveLink === 'contact' && 'border-b-2 border-green-color'} text-gray-900 py-2`}
              onClick={onClickHandler}
            >
              Контакты
            </Link>
          </li>
        </ul>

        {
          isAuth
            ? <>
              <div className='py-5 border-t flex items-center'>
                <div className='h-16 w-16 mr-3 rounded-full border'>

                </div>
                <div>
                  <p className='text-font-color mb-2 font-medium'>Джессика Васкес</p>
                  <p className='tetx-red-400 flex items-center cursor-pointer text-sm'>
                    <Image
                      src='/logout.svg'
                      alt=''
                      width='10'
                      height='10'
                      className='mr-1'
                    />
                    Выход
                  </p>
                </div>
              </div>
              <Link href='' className='text-blue-color text-center text-sm'>
                Перейти на партнёрский профиль
              </Link>
            </>
            : <MyButton className='flex items-center text-white bg-blue-color p-2 mt-5 rounded'>
              <Image
                src='/authorization.svg'
                className='mr-2'
                width='14'
                height='14'
                alt=''
              />
              Авторизация / Регистрация
            </MyButton>
        }
      </div>
      <div className='border-l w-12 fixed top-0 bottom-0 left-0 bg-white z-20'>
        <div className='sidebar__logo--block h-auto mt-2 w-full flex items-center justify-center'>
          <Link href='/'>
            <Image src={Logo} alt='logo' className='sidebar__logo' />
          </Link>
        </div>
        <div className='sidebar__burger--block h-126 w-full flex items-center justify-center '>
          <Image
            src='/burger-menu.svg'
            className='cursor-pointer'
            onClick={() => setDrawer(!drawer)}
            width='30'
            height='30'
            alt=''
          />
        </div>
        <div className='sidebar__language--block h-auto w-full flex items-center justify-center'>
          <ul className='list-none p-0'>
            <li
              className='p-2 font-medium text-sm text-center cursor-pointer text-gray-900'
              onClick={() => changeLanguage('ru')}
            >
              RU
            </li>
            <li className='p-2 font-medium text-sm text-center cursor-pointer text-gray-900'
              onClick={() => changeLanguage('en')}
            >
              EN
            </li>
            <li className='p-2 font-medium text-sm text-center cursor-pointer text-gray-900'
              onClick={() => changeLanguage('uz')}
            >
              UZ
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
