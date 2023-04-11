'use client'
import { useState } from 'react'
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import Slider from 'react-slick'
import Image from 'next/image';
import HotelImage from 'assets/MainHotelImage.png'

export const CardCarousel = () => {
  const [active, setActiveSlide] = useState<number>(0);
  let slide: any;

  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToScroll: 1,
    cssEase: "linear",
    afterChange: (current: number) => setActiveSlide(current)
  };

  const settingsFirstSlide = {
    ...settings,
    slidesToShow: 1,
  }
  const settingsSecondSlide = {
    ...settings,
    slidesToShow: 4,
  }
  return (
    <div className='max-h-auto min-h-fit mt-4' onClick={e => e.stopPropagation()}>
      {/* slider */}
      <Slider {...settingsFirstSlide} ref={(slider: number) => (slide = slider)}>
        {
          [1, 2, 3, 4, 5, 6].map((item, idx) => (
            <div className='' key={idx}>
              <div className=''>
                <Image className='w-full rounded-md' src={HotelImage} alt='' priority />
              </div>
            </div>
          ))
        }
      </Slider>
      {/* image */}
      <div className=''>
        <Slider {...settingsSecondSlide}>
          {
            [1, 2, 3, 4, 5, 6].map((item, idx) => (
              <div className='h-full outline-none' key={idx}>
                <div className='rounded-md h-[5rem] w-[5.5rem] mr-1'>
                  <Image src={HotelImage}
                    alt="product"
                    className='h-full w-full  rounded-md object-cover cursor-pointer '
                    onClick={() => {
                      slide.slickGoTo(idx);
                      setActiveSlide(idx)
                    }}
                  />
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div >
  )
}
