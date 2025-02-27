import React, { useEffect, useState } from 'react';
import TitleBanner from '../component/common/TitleBanner';
import { v4 as uuidv4 } from 'uuid';

export default function Patent() {
      const [imgs, setImgs] = useState([]);
        useEffect(()=>{
            setImgs(Array.from({length:6}, (_, i)=>i));
        },[]);
    
    
    return (
       <div className='pt-[88px] max-lg:pt-[71px] on'>
            <TitleBanner title={"특허 및 인허가"} img={"patent.png"}/>
            <div className='max-w-[1230px] px-4 mx-auto pt-[80px] pb-[180px]  max-lg:pt-[60px]  max-lg:pb-[80px] '>
                <ul className='flex flex-wrap gap-x-4 gap-y-11'>
                    {imgs.map(el => <li className={`w-[calc(33.333%-11px)] ani max-lg:w-[calc(50%-11px)]`}
                    style={{ animationDuration: `${(el + 1) * 800}ms` }}
                    key={uuidv4()}><img src={`img/patent/img${el+1}.png`} alt=''/></li>)}
                    
                </ul>
            </div>
            
        </div>
    );
}

