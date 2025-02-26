import React from 'react';

export default function CeoGreeting() {
    return (
        <div className='flex justify-between pt-[87px] items-start max-lg:block  max-lg:pt-[40px]'>
            <img className='w-[40%] max-lg:w-[100%]'
            src='/img/ceoImg.png' alt='ceoImg.png'/>
            <div className='w-[60%] pl-[84px] max-lg:w-[100%] max-lg:pl-0'>
                <div className='pb-[38px] border-b border-[#E6E6E6] max-lg:pt-0 max-lg:border-b-0 max-lg:border-l-4 max-lg:border-black
                    max-lg:mt-10  max-lg:pb-0 max-lg:mb-[26px] max-lg:pl-5
                '>
                    <span className='text-[20px] text-black font-medium mb-2 block
                        max-lg:text-base max-lg:font-normal 
                    '>미래의 젊고 활기찬 건강기능 제품을 <br className='hidden max-lg:block'/>연구 개발 생산하는 </span>
                    <h2 className='text-black text-[45px] font-bold leading-[1em] max-lg:text-[32px]'>일진바이오텍</h2>
                </div>

                <div>
                <p className='text-[16px] mt-[50px]  max-lg:mt-[0]  max-lg:text-[14px]
                '>미래의 젊고 활기찬 건강기능 제품을 연구 개발 생산하는 일진바이오텍의 홈페이지를 방문해주셔서 감사의 말씀드립니다.<br/>
                <br/>
                어느듯 삼십여년을 향해 달려가고 있는 일진바이오텍은 앞으로도 국내 바이오시장을  넘어 세계적인 <br/>
                글로벌 시장 개척을 위해 더욱더 연구개발에 분투하겠습니다.<br/><br/>

                대한민국의 생명과학의 우수성을 전 세계에 알리겠습니다. 이에 일진바이오텍의 임직원은 최고의 기업과 제품개발을 위해 고군분투해 나갈것입니다.<br/><br/>

                앞으로도 지금처럼 저희 회사와 제품을 사랑해주시고 관심 가져주시길 바라며 모든 분들의 평안과 안녕을 기원합니다.<br/><br/>

                감사합니다.</p>
                </div>
                <div className='flex justify-end items-end mt-[50px]'>
                    <span className='text-[16px] relative top-[-2px]  max-lg:text-[14px]'>일진바이오텍 대표이사 </span>
                    <p className='text-[32px] font-bold text-black ml-3  max-lg:text-[28px]'>김태명</p>
                </div>
            </div>
        </div>
    );
}

