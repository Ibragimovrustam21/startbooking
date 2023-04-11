
interface IModal {
  isModalView: boolean,
  setIsModalView: (arg: boolean) => void,
  children: React.ReactNode
}


export const Modal = ({ children, isModalView, setIsModalView }: IModal) => {
  return (
    <div
      className={`${isModalView ? 'opacity-100' : 'opacity-0 pointer-events-none'} h-screen w-screen bg-black bg-opacity-25 fixed inset-x-0 inset-y-0 flex items-center justify-center transition-all duration-300 z-20`}
      onClick={() => setIsModalView(false)}
    >
      <div className="w-[50%] text-center bg-white rounded-xl p-7 z-30 " onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
