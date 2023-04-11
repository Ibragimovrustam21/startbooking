
export const PlasticCard = () => {
  return (
    <div className='w-80 h-52 rounded-xl bg-sky-700 p-4 mr-4 cursor-pointer shadow-md text-start'>
      <p className="text-end text-white">
        Kapitalbank
      </p>
      <div className="h-9 w-11 rounded-md bg-yellow-300 my-3"></div>
      <div className="flex text-white">
        <p className="mr-3 tracking-wider tetx-white">
          XXXX
        </p>
        <p className="mr-3 tracking-wider tetx-white">
          XXXX
        </p>
        <p className="mr-3 tracking-wider tetx-white">
          XXXX
        </p>
        <p className="tracking-widest text-white">
          XXXX
        </p>
      </div>
      <div className="flex items-center text-white mt-6">
        <div className="mr-5">
          <p className="mb-1 text-xs text-white">
            Card Holder
          </p>
          <p className="text-sm text-white">
            John Smith
          </p>
        </div>
        <div className="mr-5">
          <p className="mb-1 text-xs text-white">
            Expies
          </p>
          <p className="text-sm text-white">
            XX / XX
          </p>
        </div>
        <div className="mr-5">
          <p className="mb-1 text-xs text-white">
            CVC
          </p>
          <p className="text-sm text-white">
            XXX
          </p>
        </div>
      </div>
    </div>
  )
}
