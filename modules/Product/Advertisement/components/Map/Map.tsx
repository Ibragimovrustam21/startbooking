import Image from "next/image"
import MapImage from 'assets/map.png'

export const Map = () => {
  return (
    <div>
      <p className="text-3xl mb-4">
        Карта
      </p>
      <Image
        src={MapImage}
        className='w-full rounded-lg'
        alt=''
      />
    </div>
  )
}
