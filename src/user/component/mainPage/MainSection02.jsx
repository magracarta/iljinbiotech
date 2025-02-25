import React from 'react';
import TrustComponent from './TrustComponent';

export default function MainSection02() {
    return (
        <div className='relative'>
            <img className='w-[100%] h-[100%] absolute top-0 left-0 object-cover' src='/img/main/section02.png' alt='section02.png'/>
            <div className='bg-black bg-opacity-50 backdrop-blur-md w-[100%] h-[100%] relative z-10 text-white flex items-center py-[180px] max-lg:py-20'>
                <div className='max-w-[1530px] px-4 mx-auto w-[100%]'>
                    <h2  className='title text-4xl max-lg:text-[6.3vw] font-bold mb-9 max-lg:mb-6 whitespace-nowrap'>믿음과 신뢰를 바탕으로 새로운가치<br className='max-lg:block hidden'/> 제품개발에 힘쓰고있습니다.</h2>
                    <div className='mt-[60px]'>
                        <ul className='flex gap-14 items-center max-lg:block  max-lg:gap-0'>
                            <TrustComponent img="labicon.png" title="R&D 연구개발" text="자연유래 성분의 기능을 연구하고ㆍ연구를n강화하고 차별화된 개발부터 완제품까지n안전한 제품을 소비자에게 제공할수 있도록n힘쓰고 있습니다."/>
                            <li className='w-[1px] h-[30px] bg-white  max-lg:w-[8vw]  max-lg:h-[1px]  max-lg:my-[13.3vw]  max-lg:mx-auto'></li>
                            <TrustComponent img="pdicon.png" title="품질관리" text="정직하고 진정성있는 지속적인 품질개선을n위해 글로벌 GMP 규정에 적합하는 엄격한n품질관리를 운영하고 있습니다."/>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

