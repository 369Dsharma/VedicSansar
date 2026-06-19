'use client'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Img1 from "@/public/assets/images/header1.jpg"
import Img2 from "@/public/assets/images/header2.png"
// import Img3 from "@/public/assets/images/header3.png"
import Image from 'next/image';

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive:[
    {
        breakpoint: 480,
        settings: {
          dots: true,
          arrow: false,
          nextArrow: '',
          prevArrow: '',
        }
    },
    ]

};
  return (
   <div>
     <Slider {...settings}>
      <div>
        <Image src={Img2.src} width={Img2.width} height={Img2.height} className='w-full' alt='slider 1' />
      </div>
      <div>
        <Image src={Img1.src} width={Img1.width} height={Img1.height} className='w-full' alt='slider 2'  />
      </div>
  
      
    </Slider>
   </div>
  )
}

export default MainSlider
