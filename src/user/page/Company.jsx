import React, { useEffect, useState } from 'react';
import TitleBanner from '../component/common/TitleBanner';
import { Outlet, useLocation } from 'react-router';
import CompanyNav from '../component/company/CompanyNav';

export default function Company() {
    const [navIdx, setNavIdx] = useState(0);
    const path = useLocation();
    useEffect(()=>{
        if(path.pathname === "/company") setNavIdx(0);
        if(path.pathname === "/company/vision") setNavIdx(1);
        if(path.pathname === "/company/overview") setNavIdx(2);
        if(path.pathname === "/company/direction") setNavIdx(3);
    },[path]);
    return (
        <div className='pt-[88px] max-lg:pt-[71px]'>
            <TitleBanner title={"회사소개"} img={"companyBanner.png"}/>
            <div className='max-w-[1230px] px-4 mx-auto pt-[60px] pb-[144px]  max-lg:pt-[30px]  max-lg:pb-[80px]'>
                <CompanyNav idx={navIdx}/>
                <Outlet/>
            </div>
        </div>
    );
}

