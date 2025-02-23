import React from 'react';
import Nav from './Nav';

export default function Footer() {
    return (
        <div className='py-28 bg-gray-100'>
            <div className='max-w-7xl mx-auto p-5 flex items-center justify-between'>
                <h3 className='text-[34px] text-black font-bold '>(주)일진바이오텍  ADMIN</h3>   
                <Nav/>
            </div>
        </div>
    );
}

