import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import ProductThumnail from './ProductThumnail';

export default function MainSection03() {
    const [products,setProducts] = useState();
     useEffect(()=>{
            fetch("/json/main/products.json").then((re)=>{
                return re.json();
            }).then((result)=>{
                setProducts(result);
            }).catch(console.error);        
     },[]);
    return (
        <div>
            <div className='max-w-[1530px] px-4 mx-auto my-[180px] max-md:my-[80px] text-center'>
                <h2 className='ani1 title text-4xl  max-lg:text-[6.3vw] text-black font-bold  max-lg:text-left'>건강한 삶과 아름다움을 <br className='max-lg:block hidden'/>유지시켜주는 대표 제품</h2>
                <div className='flex justify-center pt-[80px] pb-[90px] gap-[38px] max-lg:flex-col max-lg:gap-[20px] max-lg:pb-[55px] max-lg:pt-[40px]'>
                    {products&&products.map((el,idx)=>(idx < 3)&&<ProductThumnail key={el.title} img={el.img} title={el.title} sub={el.sub} description={el.description} cn={((idx+1)*2)}/>)}
                </div>
                <Link className='border-b border-[#000] text-black 
                    text-[20px] max-lg:text-[4.266vw] ani5
                ' to="/products">더 많은 제품 보기 +</Link>
            </div>
        </div>
    );
}

