import React from 'react';

export default function TitleBanner({title, img}) {
    return (
        <div className='relative on'>
            <img className='w-[100%] h-[100%] absolute top-0 left-0 object-cover' src={`/img/${img}`} alt={img}/>
            <h2 className='ani1 relative text-white text-center text-[54px] py-[126px] font-bold
                max-lg:text-[30px] max-lg:py-[80px]
            '>{title}</h2>
        </div>
    );
}

