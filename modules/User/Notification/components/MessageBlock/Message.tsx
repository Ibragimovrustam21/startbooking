import './message.scss'

export const Message = () => {
  return (
    <>
      <p className='text-font-color font-semibold text-2xl my-5'>
        Сообщения
      </p>
      <p className='text-font-color' >
        Получать сообщения от администрации о важных изменениях в сервисе
      </p>
      <div className='py-8 border-b'>
        <div className='flex items-center mb-4'>
          <label
            htmlFor="message-radio"
            className="container text-base w-full pl-6 font-medium text-font-color cursor-pointer relative"
          >
            Электронные письма
            <input
              checked={true}
              id="message-radio"
              type="radio"
              value=""
              className="radio opacity-0"
              name='message-radio'
            />
            <span className='checkmark absolute h-4 w-4 left-0 top-1.5 border border-gray-700 rounded-0'></span>
          </label>
        </div>
        <div className='flex items-center'>
          <label
            htmlFor="message-radio-2"
            className="container relative text-base pl-6 font-medium text-font-color cursor-pointer "
          >
            SMS-сообщения
            <input
              id="message-radio-2"
              type="radio"
              value=""
              className="radio opacity-0"
              name='message-radio'
            />
            <span className='checkmark absolute h-4 w-4 left-0 top-1.5 border border-gray-700 rounded-0'></span>
          </label>
        </div>
      </div>
      <p className='text-font-color text-2xl font-medium my-6'>
        Советы и рекламные материалы
      </p>
      <p className='text-font-color'>
        Получать сообщения от администрации о важных изменениях в сервисе
      </p>
      <div className='py-10'>
        <div className='flex items-center mb-4'>
          <label
            htmlFor="message-checkbox"
            className="container relative pl-6 text-base font-medium text-font-color cursor-pointer"
          >
            Электронные письма
            <input
              id="message-checkbox"
              type="checkbox"
              value=""
              className="radio opacity-0"
              name='checkbox'
            />
            <span className='checkmark absolute h-4 w-4 left-0 top-1.5 border border-gray-700 rounded-0'></span>
          </label>
        </div>
        <div className='flex items-center mb-4'>
          <label
            htmlFor="message-checkbox-2"
            className="container relative pl-6 text-base font-medium text-font-color cursor-pointer"
          >
            SMS-сообщения
            <input
              id="message-checkbox-2"
              type="checkbox"
              value=""
              className="radio opacity-0"
              name='checkbox-2'
            />
            <span className='checkmark absolute h-4 w-4 left-0 top-1.5 border border-gray-700 rounded-0'></span>
          </label>
        </div>
        <div className='flex items-center mb-4'>
          <label
            htmlFor="message-checkbox-3"
            className="container relative pl-6 text-base font-medium text-font-color cursor-pointer"
          >
            Электронные письма
            <input
              id="message-checkbox-3"
              type="checkbox"
              value=""
              className="radio opacity-0"
              name='checkbox-3'
            />
            <span className='checkmark absolute h-4 w-4 left-0 top-1.5 border border-gray-700 rounded-0'></span>
          </label>
        </div>
      </div>
    </>
  )
}
