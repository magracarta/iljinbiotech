import React from 'react';

export default function Direction() {
    return (
        <div className='text-center mt-[80px] max-lg:mt-[40px]'>
            <h2 className='text-[36px] max-lg:text-[20px] font-bold text-black'>오시는길</h2>
            <p className='mt-[35px] max-w-[1000px] mx-auto mb-[30px] '>본사 : 서울시 서초구 방배천로 2안길 39, 3층</p>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.2360553676135!2d126.97893019423645!3d37.47875555712631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca04dab0644cb%3A0x3f218a1ec57619a4!2z7ISc7Jq47Yq567OE7IucIOyEnOy0iOq1rCDrsKnrsLDsspzroZwy7JWI6ri4IDM5IDPsuLU!5e0!3m2!1sko!2skr!4v1740575217259!5m2!1sko!2skr" width="100%" height="570" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
}

