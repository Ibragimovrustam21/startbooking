import Image from "next/image";
import ManagerAvatar from 'assets/ava.png'

export const DialogWindow = () => {
  return (
    <div className="mb-10">
      {/* user dialog */}
      <div className="flex justify-end mb-4">
        <div className="bg-slate-700 rounded-lg py-2 px-4">
          <p className="max-w-md text-white">Добрый день) как ответственно. Спасибо 😊</p>
        </div>
      </div>
      {/* manager dialog */}
      <div className="flex items-center justify-start mb-4">
        <Image
          src={ManagerAvatar}
          className='h-10 w-10 mr-3 rounded-full'
          alt='user-avatar'
        />
        <div>
          <p className="text-gray-color">Акмаль</p>
          <div className="bg-gray-200 rounded-lg py-2 px-4">
            <p className="max-w-md">Всегда пожалуйста 😇</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-start  mb-4">
        <Image
          src={ManagerAvatar}
          className='h-10 w-10 mr-3 rounded-full'
          alt='user-avatar'
        />
        <div>
          <p className="text-gray-color">Акмаль</p>
          <div className="bg-gray-200 rounded-lg py-2 px-4">
            <p className="max-w-md">
              Добрый день, Анвар! Вы забронировали двухместный люкс в гостинице HYATT Regency Tashkent.
              Желаем приятных впечатлений 😉
            </p>
          </div>
        </div>
      </div>
      {/* user dialog */}
      <div className="flex justify-end  mb-4">
        <div className="my-text bg-slate-700 text-white rounded-lg py-2 px-4">
          <p className="max-w-md tetx-white">Ого! Спасибо)</p>
        </div>
      </div>
      {/* manager dialog */}
      <div className="flex items-center justify-start  mb-4">
        <Image
          src={ManagerAvatar}
          className='h-10 w-10 mr-3 rounded-full'
          alt='user-avatar'
        />
        <div>
          <p className="text-gray-color">Акмаль</p>
          <div className="bg-gray-300  rounded-lg py-2 px-4">
            <p className="max-w-md">Пожалуйста!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
