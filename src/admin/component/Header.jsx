import React from 'react';
import { useNavigate } from 'react-router';
import Nav from './Nav';

export default function Header() {
    const navigator = useNavigate();
    
    return (
        <div className='fixed top-0 left-0 w-[100%] border-b border-gray-300 bg-white'>
            <div className='flex justify-between max-w-7xl mx-auto p-5  items-center'>
                <h3 className='uppercase text-black text-xl font-bold cursor-pointer' onClick={()=>navigator("/admin")}>iljinbiotEch admin</h3>
                <div>
                   <Nav/>
                </div>
            </div>
        </div>
    );
}

