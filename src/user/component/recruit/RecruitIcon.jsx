import React from 'react';

export default function RecruitIcon({img,text,idx}) {
    return (
        <div className='bg-white max-w-[230px]   w-[230px] 
         max-pc:w-[15.3vw]  aspect-square
            max-lg:w-[calc(50%-8px)] max-lg:max-w-none max-lg:max-h-none
             flex flex-col items-center justify-center rounded-[100%] ani'
            style={{animationDuration:(idx*800)+`ms`}}
        >
            <img className='w-[45%]' src={`/img/recruit/${img}`} alt={img}/>
            <span className='max-md:text-[13px] font-medium'>{text}</span>
        </div>
    );
}

