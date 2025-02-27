import React from 'react';
import Nav from './Nav';

export default function Footer() {
    return (
        <footer className='bg-[#EFEFEF] py-[134px] max-lg:py-[100px]  max-lg:py-[64px]  max-lg:text-[13px]'>
            <div className='max-w-[1532px] w-[100%] px-4 mx-auto flex justify-between'>
                <div className=' max-lg:w-[100%]'>
                    <h2 className='text-4xl font-bold mb-9  max-lg:mb-4 max-lg:text-[30px]  max-lg:text-2xl'>(주)일진바이오텍</h2>
                    <nav className=" max-lg:block hidden mb-6 mt-7">
                        <ul className='flex text-[13px] font-medium'>
                            <Nav/>
                        </ul>
                    </nav>
                    <a className='mb-3 block' href='mailto:iljinbiotac@hanmail.net'>iljinbiotac@hanmail.net</a>
                    <p className='mb-6 block'>
                        서울시 서초구 방배천로 2안길 39, 3층<br/>
                        전화 02-521-0538 / 02-521-0541 | 팩스 02-597-7864 <br/>
                        소비자상담실 02-3473-0001 | 사업자 번호 108-81-54721
                    </p>
                    <span>© 2025 (주) 일진바이오텍. All rights reserved</span>
                </div>
                <nav className=' max-lg:hidden'>
                    <ul className='flex max-lg:text-base font-medium'>
                        <Nav/>
                    </ul>
                </nav>
            </div>
        </footer>
    );
}

