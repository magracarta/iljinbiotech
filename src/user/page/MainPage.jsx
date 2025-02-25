import React, { useEffect } from 'react';
import MainSection01 from '../component/mainPage/MainSection01';
import Mainslide from '../component/mainPage/Mainslide';
import MainSection02 from '../component/mainPage/MainSection02';
import MainSection03 from '../component/mainPage/MainSection03';

export default function MainPage() {
    
    return (
        <div className=''>
            <Mainslide/>
            <MainSection01/>
            <MainSection02/>
            <MainSection03/>
        </div>
    );
}

