import React from 'react';

export default function FloatinBtn({on,text , clickhandle}) {
    return (
        <li onClick={clickhandle} className={`${on &&"bg-[#000] text-white"} flex justify-between cursor-pointer 
            items-center px-3 py-1 my-2 rounded-3xl hover:bg-[#000] hover:text-white transition-all duration-500
        `}>{text}<i className={`ml-4 w-[10px] h-[10px] bg-[#ccc] block rounded-full ${on && "bg-white relative"}`}></i></li>
    );
}

