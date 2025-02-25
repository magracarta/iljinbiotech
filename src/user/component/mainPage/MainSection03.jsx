import React from 'react';
import { Link } from 'react-router';

export default function MainSection03() {
    return (
        <div>
            <div className='max-w-[1500px] mx-auto my-[180px] max-md:my-[80px] text-center'>
                <h2 className='title text-4xl  max-lg:text-[6.3vw] text-black font-bold mb-9  max-lg:mb-6  max-lg:text-left'>건강한 삶과 아름다움을 <br className='max-lg:block hidden'/>유지시켜주는 대표 제품</h2>


                <Link className='border-b border-[#000] text-black ' to="/products">더 많은 제품 보기 +</Link>
            </div>
        </div>
    );
}

