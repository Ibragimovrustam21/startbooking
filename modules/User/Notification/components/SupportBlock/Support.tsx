
export const Support = () => {
  return (
    <>
      <p className='text-font-color font-semibold text-2xl my-5'>
        Поддержка аккаунта
      </p>
      <p className='text-font-color'>
        Иногда нам нужно обращаться к вам по вопросам, связанным с вашим аккаунтом, поездками, юридическими особенностями, безопасностью и конфеденциальностью, а также отвечать на ваши вопросы о помощи.
        Ради вашей бещопасности отключить уведомления на электронную почту нельзя. Кроме того, при необзодимости мы можем связаться с вами по телефону или иным способом.
      </p>
      <div className='py-8'>
        <div className='flex items-center mb-4'>
          <label
            htmlFor="support-radio"
            className="container text-base w-full pl-6 font-medium text-font-color cursor-pointer relative"
          >
            Электронные письма
            <input
              checked
              id="support-radio"
              type="radio"
              value=""
              className="radio opacity-0"
              name='support-radio'
            />
            <span className='checkmark absolute h-4 w-4 left-0 top-1.5 border border-gray-700 rounded-0'></span>
          </label>
        </div>
        <div className='flex items-center'>
          <label
            htmlFor="support-radio-2"
            className="container relative text-base pl-6 font-medium text-font-color cursor-pointer "
          >
            SMS-сообщения
            <input
              id="support-radio-2"
              type="radio"
              value=""
              className="radio opacity-0"
              name='support-radio'
            />
            <span className='checkmark absolute h-4 w-4 left-0 top-1.5 border border-gray-700 rounded-0'></span>
          </label>
        </div>
      </div>
    </>
  )
}
