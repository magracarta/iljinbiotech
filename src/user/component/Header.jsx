import React from 'react';
import { Link, useNavigate } from 'react-router';

export default function Header() {
    const navigator = useNavigate();
    return (
        <header className='fixed w-[100%] border-b border-[#D9D9D9]'>
            <div className='flex justify-between mx-auto max-w-[1200px] items-center py-6'>
                <h2 onClick={()=>navigator("/")} className='uppercase text-3xl cursor-pointer font-bold'>iljinbiotEch</h2>
                <nav>
                    <ul className='flex gap-5'>
                        <li><Link to="/company">회사소개</Link></li>
                        <li><Link to="/info">제품정보</Link></li>
                        <li><Link to="/info">생산현장</Link></li>
                        <li><Link to="/info">특허 및 인허가</Link></li>
                        <li><Link to="/info">인재채용</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

