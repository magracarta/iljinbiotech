import React from 'react';
import CompanyButton from '../ui/CompanyButton';

export default function CompanyNav({idx}) {
    return (
        <div className='flex justify-center flex-wrap'>
            <CompanyButton text={"대표이사 인사말"} pick={idx===0} link={"/company"}/>
            <CompanyButton text={"회사비전"} pick={idx===1} link={"/company/vision"}/>
            <CompanyButton text={"회사개요"} pick={idx===2} link={"/company/overview"}/>
            <CompanyButton text={"오시는길"} pick={idx===3} link={"/company/direction"}/>
        </div>
    );
}

