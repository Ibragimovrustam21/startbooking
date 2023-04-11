'use client'
import { useState } from 'react'
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from 'react-slick'
import Image from 'next/image';
import HotelImage from 'assets/MainHotelImage.png'

export const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  let slide: any;

  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: "linear",
    pauseOnHover: false,
    afterChange: (current: number) => setActiveSlide(current)
  };

  const settingsFirstSlide = {
    ...settings,
    slidesToShow: 1,
    fade: true
  }
  const settingsSecondSlide = {
    ...settings,
    slidesToShow: 5,
  }
  return (
    <div className='max-h-[35rem] min-h-fit relative mt-4'>
      <div className='relative h-full'>
        <Slider {...settingsFirstSlide} ref={(slider: number) => (slide = slider)}>
          {
            [1, 2, 3, 4, 5, 6].map((item, idx) => (
              <div className='h-full' key={idx}>
                <Image className='w-full' src={HotelImage} alt='' />
              </div>
            ))
          }
        </Slider>
        {/* image */}
        <div className='absolute bottom-0 left-10 right-10 mb-10'>
          <Slider {...settingsSecondSlide}>
            {
              [1, 2, 3, 4, 5, 6].map((item, idx) => (
                <div className='outline-none' key={idx}>
                  <Image src={HotelImage}
                    alt="product"
                    className={`${activeSlide === idx && 'border-2'}  w-auto cursor-pointer rounded-lg h-[6rem]`}
                    onClick={() => {
                      slide.slickGoTo(idx);
                      setActiveSlide(idx)
                    }} />
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div >
  )
}
