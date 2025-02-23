import React from 'react';
import { Outlet } from 'react-router';
import Header from "../component/Header";
import Footer from '../component/Footer';

export default function AdminOk() {
    return (
        <div>
            <Header/>
            <div className='mt-20 max-w-7xl mx-auto px-5'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

