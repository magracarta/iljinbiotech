import React, { useEffect, useRef, useState } from 'react';
import MainSection01 from '../component/mainPage/MainSection01';
import Mainslide from '../component/mainPage/Mainslide';
import MainSection02 from '../component/mainPage/MainSection02';
import MainSection03 from '../component/mainPage/MainSection03';
import FloatinBtn from '../component/ui/FloatinBtn';

export default function MainPage() {
    const [scrollOn , setScrollOn] = useState([true, false, false, false]);
    const section1 = useRef(null);
    const section2 = useRef(null);
    const section3 = useRef(null);
    useEffect(()=>{
        const sec1 = section1.current;
        const sec2 = section2.current;
        const sec3 = section3.current;
        window.addEventListener("scroll",()=>{
            if(window.scrollY > sec1.offsetTop-window.innerHeight/2){
                sec1.classList.add("on");
                setScrollOn(prev=>prev.map((el,idx)=>idx===1 ? el=true : el=false));
            }else { setScrollOn(prev=>prev.map((el,idx)=>idx===0 ? el=true : el=false));}
            if(window.scrollY > sec2.offsetTop-window.innerHeight/2){
                sec2.classList.add("on");
                setScrollOn(prev=>prev.map((el,idx)=>idx===2 ? el=true : el=false));
            }
            if(window.scrollY > sec3.offsetTop-window.innerHeight/2){
                sec3.classList.add("on");
                setScrollOn(prev=>prev.map((el,idx)=>idx===3 ? el=true : el=false));
            }
        });
    },[section1, section2, section3]);
    
    return (
        <div className=''>
            <Mainslide/>
            <div ref={section1}><MainSection01/></div>
            <div ref={section2}><MainSection02/></div>
            <div ref={section3}><MainSection03/></div>

            <div className='fixed right-4 top-[50%] translate-y-[-50%] z-10 text-[#CCCCCC] max-lg:hidden'>
                <div className='absolute w-[1px] h-[70%] bg-[#ccc] right-[16px] top-[15%] text-sm '></div>
                <ul>
                    <FloatinBtn text={"메인"}     on={scrollOn[0]} clickhandle={()=>{window.scrollTo({top:0, behavior: "smooth"})}}/>
                    <FloatinBtn text={"기업소개"} on={scrollOn[1]} clickhandle={()=>{window.scrollTo({top:section1.current.offsetTop-window.innerHeight/4, behavior: "smooth"})}}/>
                    <FloatinBtn text={"사업분야"} on={scrollOn[2]} clickhandle={()=>{window.scrollTo({top:section2.current.offsetTop-window.innerHeight/4, behavior: "smooth"})}}/>
                    <FloatinBtn text={"제품소개"} on={scrollOn[3]} clickhandle={()=>{window.scrollTo({top:section3.current.offsetTop-window.innerHeight/4, behavior: "smooth"})}}/>
                </ul>
            </div>
        </div>
    );
}

