import Image from 'next/image'
import { useEffect, CSSProperties } from 'react'
import LoaderImage from '/assets/loader.png'
import { FadeLoader } from 'react-spinners';

interface ILoader {
  title: string,
  isLoaderView: boolean,
  setIsLoaderView: (arg: boolean) => void
}

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};


export const Loader = ({ title, isLoaderView, setIsLoaderView }: ILoader) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaderView(false)
    }, 2000)


    return () => clearTimeout(timer)
  }, [isLoaderView])

  return (
    <div className={`${isLoaderView ? 'opacity-100' : 'opacity-0 pointer-events-none'} absolute inset-x-0 inset-y-0 bg-white transition-all duration-300 z-10`}>
      <div className='fixed border h-screen w-screen text-center '>
        <p className='text-3xl my-20'>{title}</p>
        <FadeLoader
          color={'#0EDF9B'}
          loading={isLoaderView}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <Image className='absolute bottom-0 left-[40%]  ' src={LoaderImage} alt='' />
      </div>
    </div>
  )
}
