import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function TrustComponent({img, title, text}) {
    return (
        <li className='flex gap-12 items-center w-[50%]  max-lg:w-[100%]  max-lg:block  max-lg:text-center'>
            <img className=' max-lg:mx-auto max-lg:w-[30%]' src={`/img/main/${img}`} alt={img}/>
            <div className='max-w-[307px]  max-lg:max-w-[100%] max-lg:mt-4'>
                <span className='text-[20px] mb-6 block font-medium max-lg:mb-2 max-lg:text-[4.26vw]'>{title}</span>
                <p className='font-light max-lg:text-[3.7vw]'>{text.split("n").map(el=><span key={uuidv4()} className='block'>{el}</span>)}</p>
            </div>
        </li>
    );
}

