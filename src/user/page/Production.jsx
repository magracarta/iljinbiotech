import React, { useEffect, useState } from 'react';
import TitleBanner from '../component/common/TitleBanner';
import { v4 as uuidv4 } from 'uuid';

export default function Production() {
    const [imgs, setImgs] = useState([]);
    useEffect(()=>{
        setImgs(Array.from({length:13}, (_, i)=>i));
    },[]);


    return (
         <div className='pt-[88px] max-lg:pt-[120px] on'>
                <TitleBanner title={"생산현장"} img={"production.png"}/>
                <div className='max-w-[1230px] px-4 mx-auto pt-[80px] pb-[180px]  max-lg:pt-[60px]  max-lg:pb-[80px] '>
                    <ul className='flex flex-wrap gap-4'>
                        <li className='w-[calc(33.333%-11px)] overflow-hidden relative ani max-lg:w-[calc(50%-11px)]'
                            style={{ animationDuration: `400ms` }} >
                            <video controls autoPlay loop muted playsinline className="absolute top-[50%] translate-y-[-50%] w-full h-full object-cover"  >
                                <source src='/img/production/video.mp4' type='video/mp4'/>
                            </video>
                        </li>
                        {imgs.map(el => <li className={`w-[calc(33.333%-11px)] ani max-lg:w-[calc(50%-11px)]`}
                        style={{ animationDuration: `${(el + 1) * 400+400}ms` }}
                        key={uuidv4()}><img src={`img/production/img${el+1}.png`} alt=''/></li>)}
                        
                    </ul>
                </div>
        </div>
    );
}

