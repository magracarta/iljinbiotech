import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Nav from './Nav';

export default function Header() {
    const [open, setOpen] = useState(false);
    const header = useRef(null);
    const hamburger = useRef(null);
    const navigator = useNavigate();
    useEffect(()=>{
        let before = 0;
        const headerEl = header.current;
        let scrollEvent = ()=>{
            let currunt = window.scrollY;
            if(currunt < before || currunt < 150)headerEl.style.top = "0px";
            else headerEl.style.top = "-100px";
            
            if(window.scrollY > 100) headerEl.classList.remove("scroll");
            else headerEl.classList.add("scroll");

            before = window.scrollY;
        }
        window.addEventListener("scroll",scrollEvent);
        return ()=>{
            window.removeEventListener("scroll", scrollEvent);
        }
    },[header]);

    return (
        <header ref={header} className={`scroll fixed w-[100%] border-b border-[#D9D9D9] bg-white transition-all duration-700 z-50 ${open ? "open" : ""}`}>
            <div className='flex justify-between mx-auto max-w-[1532px] items-center py-6 px-4  max-md:py-4'>
                <h2 onClick={()=>navigator("/")} className='uppercase text-3xl cursor-pointer font-bold max-md:text-xl text-black flex items-center'>
                    <img className='logow' src="/img/logowhite.svg" alt='logo'/>
                    <img className='logob' src="/img/logoblack.svg" alt='logo'/>
                    iljinbiotEch
                </h2>
                <nav className='max-md:hidden'>
                    <ul className='flex gap-12 font-medium'>
                        <Nav/>
                    </ul>
                </nav>
                <div className='w-[23px] h-[16px] relative hidden max-md:block' ref={hamburger} onClick={()=>{setOpen(prev=> !prev)}}>
                    <i className={`w-[100%] h-[1px] absolute left-0 ${open ? `top-[50%] rotate-45`:` top-[0]`}`}></i>
                    <i className={`w-[100%] h-[1px] absolute left-0 top-[50%] ${open ? `hidden` : `block` }`}></i>
                    <i className={`w-[100%] h-[1px] absolute left-0  ${open ? `top-[50%] -rotate-45`:` top-[100%]`}`}></i>
                </div>
            </div>
            <div className={`side-menu hidden max-md:block fixed w-[100%] top-[72px] bg-white h-[calc(100%-72px)] ${open?`left-0`:`left-[-100%]`} transition-all duration-700 `}>
                <ul className='flex flex-col gap-y-6 p-4 text-[18px] font-medium'>
                    <Nav/>
                </ul>
            </div>
        </header>
    );
}

