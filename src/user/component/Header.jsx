import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Nav from './Nav';

export default function Header() {
    const [open, setOpen] = useState(false);
    const header = useRef(null);
    const hamburger = useRef(null);
    const navigator = useNavigate();
    const path = useLocation();

    useEffect(()=>{
        const headerEl = header.current;
        if(window.location.pathname === "/") headerEl.classList.add("scroll");
        let before = 0;
        let scrollEvent = ()=>{
            let currunt = window.scrollY;
            if(currunt < before || currunt < 150)headerEl.style.top = "0px";
            else headerEl.style.top = "-100px";
            before = window.scrollY;
            if(window.location.pathname !== "/") return;
            if(window.scrollY > 100) headerEl.classList.remove("scroll");
            else headerEl.classList.add("scroll");
        }
        window.addEventListener("scroll",scrollEvent);
        return ()=>{
            window.removeEventListener("scroll", scrollEvent);
        }
    },[header]);
    useEffect(()=>{
        window.scrollTo({top:0});
    },[path]);

    return (
        <header ref={header} className={`fixed w-[100%] border-b border-[#D9D9D9] bg-white transition-all duration-700 z-50 ${open ? "open" : ""}`}>
            <div className='flex justify-between mx-auto max-w-[1532px] items-center py-6 px-4 max-lg:py-4'>
                <h2 onClick={()=>{navigator("/"); setOpen(false)}} className='uppercase text-3xl cursor-pointer font-bold  max-lg:text-xl text-black flex items-center'>
                    <img className='logow' src="/img/logowhite.svg" alt='logo'/>
                    <img className='logob' src="/img/logoblack.svg" alt='logo'/>
                    iljinbiotEch
                </h2>
                <nav className=' max-lg:hidden'>
                    <ul className='flex gap-12 font-medium'>
                        <Nav/>
                    </ul>
                </nav>
                <div className='w-[23px] h-[16px] relative hidden  max-lg:block' ref={hamburger} onClick={()=>{setOpen(prev=> !prev)}}>
                    <i className={`w-[100%] h-[1px] absolute left-0 ${open ? `top-[50%] rotate-45`:` top-[0]`}`}></i>
                    <i className={`w-[100%] h-[1px] absolute left-0 top-[50%] ${open ? `hidden` : `block` }`}></i>
                    <i className={`w-[100%] h-[1px] absolute left-0  ${open ? `top-[50%] -rotate-45`:` top-[100%]`}`}></i>
                </div>
            </div>
            <div className={`side-menu hidden  max-lg:block fixed w-[100%] top-[72px] bg-white h-[calc(100%-72px)] ${open?`left-0`:`left-[-100%]`} transition-all duration-700 `}>
                <ul className='flex flex-col gap-y-6 p-4 text-[18px] font-medium'>
                    <Nav setOpen={setOpen}/>
                </ul>
            </div>
        </header>
    );
}

