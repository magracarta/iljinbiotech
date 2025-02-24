import React from 'react';
import { Link } from 'react-router';

export default function Nav() {
    return (
        <>
            <li><Link to="/company">회사소개</Link></li>
            <li><Link to="/info">제품정보</Link></li>
            <li><Link to="/info">생산현장</Link></li>
            <li><Link to="/info">특허 및 인허가</Link></li>
            <li><Link to="/info">인재채용</Link></li>  
        </>
    );
}

