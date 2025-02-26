import React from 'react';
import { Link } from 'react-router';

export default function CompanyButton({text, pick, link}) {
    return (
        <Link className={`text-[#555555] border-b-2  ${pick&& "text-[#000] border-[#000]"} 
        w-[25%] max-w-[263px] block text-center py-[26px] font-medium max-md:w-[50%] max-md:max-w-[100%]
        max-md:pb-[13px] max-md:text-[14px]
        `} to={link}>{text}</Link>
    );
}

