import { useRef, useState } from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { topWhiskies } from '../../data/whiskey'
import style from './style.module.css'
import { WhiskeyItemDetail } from '../WhiskeyDetails'

type SlickSliderRef = Slider

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef<SlickSliderRef | null>(null)

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: false,
    afterChange: (index: number) => {
      setCurrentSlide(index)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          autoplay: false,
        },
      },
    ],
  }

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index)
      setCurrentSlide(index)
    }
  }

  return (
    <div className="pt-40 bg-sliderBg bg-[#D7D5CD] ">
      <Slider ref={sliderRef} {...settings} className="container ">
        {topWhiskies.map((whiskey, index) => (
          <div
            key={index}
            className={`w-[284px] pb-10 cursor-pointer ${style.whiskeyBox}`}
            onClick={() => goToSlide(index)}
          >
            <div className="relative w-[236px] h-[346px] aspect-[.26/1] max-h-[346px]">
              <div className="left-border bottom-0 left-0 absolute w-[1px] z-[3] h-[316px] bg-stone-200"></div>
              <div
                className={`${style.titleBox} bottom-0 left-0 mx-auto py-[10px] pr-0 pl-[12px] absolute h-[256px] w-40 z-[1] `}
              >
                <h3 className="vertical-lr text-sm h-full text-center uppercase w-10 flex items-center justify-center text-stone-600">
                  {whiskey.name}
                </h3>
              </div>
              <div
                className={`h-[calc(316px-60px)] absolute right-0 top-8 w-[176px] z-[2] bg-stone-200 bg-[100%] ${style.imageBox}`}
              ></div>
              <picture className="item-picture h-[330px] absolute right-0 top-0 w-[calc( 316px * 0.2594936708 * 1 )] z-[3]">
                <img src={whiskey.imageUrl} className="h-[330px] max-w-[180px]" alt={whiskey.name} />
              </picture>
              <div className="item-arrow bg-transparent bottom-0 h-[60px] absolute right-0 w-[73px] z-[1]">
                <div className="arrow-wrapper h-full relative hidden w-full ">
                  <div className="flex h-full left-[72px] absolute w-full bg-yellow-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#ffffff"
                      className="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <section className="mt-28 bg-whiskeyDetails relative">
        <div className={` ${style.whiskeyDetailSection}`}>
          <div className="flex items-start gap-8 container py-28 md:flex-row flex-col">
            {topWhiskies.map((whiskey, index) => (
              <>
                {currentSlide === index && (
                  <WhiskeyItemDetail
                    wImage={whiskey.imageUrl}
                    wName={whiskey.name}
                    wType={whiskey.whiskeyType}
                    wAbu={whiskey.abv}
                    wOccasion={whiskey.topOccasions}
                    wPrice={whiskey.price}
                    wRating={whiskey.averageRating}
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
