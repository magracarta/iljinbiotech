import React, { useEffect, useState } from 'react';
import TitleBanner from '../component/common/TitleBanner';
import ProductThumnail from '../component/mainPage/ProductThumnail';

export default function Products() {
    const [products,setProducts] = useState();
         useEffect(()=>{
                fetch("/json/main/products.json").then((re)=>{
                    return re.json();
                }).then((result)=>{
                    setProducts(result);
                }).catch(console.error);        
         },[]);
    return (
        <div className='pt-[88px] max-lg:pt-[71px] on'>
           <TitleBanner title={"제품정보"} img={"products.png"}/>
           <div className='max-w-[1230px] px-4 mx-auto pt-[60px] pb-[144px]  max-lg:pt-[30px]  max-lg:pb-[80px]'>
                <div className='flex flex-wrap justify-left pt-[80px] pb-[90px] gap-[20px] gap-y-11
                         max-lg:flex-col max-lg:gap-[20px] max-lg:pb-[55px] max-lg:pt-[40px]'>
                    {products&&products.map((el,idx)=><ProductThumnail key={el.title} img={el.img} title={el.title} sub={el.sub} description={el.description} cn={`ani`+((idx+1)*2)}/>)}
                </div>
           </div>
        </div>
    );
}

