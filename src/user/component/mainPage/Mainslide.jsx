import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "../../css/mainslide.css"

import { Parallax,Autoplay, Pagination, Navigation } from 'swiper/modules';
export default function Mainslide() {
    let [mainSlide , setMainSlide]= useState();

    useEffect(()=>{
        fetch("/json/main/mainslide.json").then((re)=>{
            return re.json();
        }).then((result)=>{
            setMainSlide(result);
        }).catch(console.error);        
    },[]);
    return (
        <div className="slideContainer relative  max-lg:h-[166.78vw] h-[50.1vw] on">
            {mainSlide&&<Swiper
                spaceBetween={0}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                parallax={true}
                speed={1000}
                loop={true}
                navigation={true}
                modules={[Parallax,Autoplay, Pagination, Navigation]}
                className="mySwiper">
                {mainSlide&&mainSlide.map((el,idx)=><SwiperSlide key={el.title+idx}>
                    <div className='text-white relative text-center '>
                       <img className='w-[100%]  max-lg:hidden' src={el.img} alt={el.img}/>
                       <img className='w-[100%] hidden  max-lg:block' src={el.imgMo} alt={el.imgMo} />
                       <div className='textbox absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] w-[100%]'>
                            <h1 data-swiper-parallax="-1000"
                            className='text-[2.86vw] font-bold uppercase leading-[1.4em]  max-lg:text-[8vw]
                            '>{el.title.split("\n").map((el, idx)=><span key={el+idx} className='block'>{el}</span>)}</h1>
                            <p data-swiper-parallax="-1500"
                            className='text-[1.041vw] mt-7  max-lg:text-[4.2vw]'>{el.subtitle}</p>
                       </div>
                    </div>
                </SwiperSlide>)}
            </Swiper>}

            <div className='absolute bottom-10 left-0 z-10 text-white flex justify-center flex-col items-center w-[100%] '>
                <div className='w-[1px] h-[25px] bg-gray-400 relative overflow-hidden'>
                    <i className='w-[1px] h-[15px] animate-[lineani_1s_linear_infinite] bg-white absolute left-0 top-0 block'></i>
                </div>
                <div className='w-[16px] h-[23px] border border-white rounded-3xl mt-4 relative  max-lg:hidden'>
                    <i className='absolute w-[1px] h-[3px] bg-white left-[50%] translate-x-[-50%] top-[5px] '></i>
                </div>
                <span className='text-[12px] mt-4  max-lg:mt-2'>SCROLL</span>
            </div>
        </div>
    );
}

