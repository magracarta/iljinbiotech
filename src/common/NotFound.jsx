import React from 'react';
import Footer from '../user/component/Footer';
import Header from '../user/component/Header';
import { Link } from 'react-router';

export default function NotFound() {
    return (
        <>
            <Header/>
            <div className='text-center pt-[80px] max-lg:pt-[40px] on'>
                <div className='py-[180px] max-lg:py-[80px] px-4'>
                    <h2 className='text-[128px] font-bold text-black'>404</h2>
                    <p className='mt-[20px]'>찾을 수 없는 페이지입니다.<br/>
                    요청하신 페이지가 사라졌거나, <br className='hidden max-md:block'/>잘못된 경로를 이용하셨습니다 :-)</p>
                    <Link className='mt-[80px] bg-black text-white py-3 w-[290px] mx-auto block  max-md:mt-[60px]' to="/">메인페이지로 이동</Link>
                </div>
            </div>
            <Footer/>
        </>
    );
}

