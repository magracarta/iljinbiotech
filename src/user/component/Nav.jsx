import React from 'react';
import { Link } from 'react-router';

export default function Nav({setOpen}) {
    return (
        <>
            <li onClick={()=>{setOpen&& setOpen(false)}}><Link to="/company">회사소개</Link></li>
            <li onClick={()=>{setOpen&& setOpen(false)}}><Link to="/products">제품정보</Link></li>
            <li onClick={()=>{setOpen&& setOpen(false)}}><Link to="/production">생산현장</Link></li>
            <li onClick={()=>{setOpen&& setOpen(false)}}><Link to="/Patent">특허 및 인허가</Link></li>
            <li onClick={()=>{setOpen&& setOpen(false)}}><Link to="/recruit">인재채용</Link></li>  
        </>
    );
}

