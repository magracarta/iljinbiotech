import React from 'react';

export default function MainSection01() {
    return (
        <div className='text-center py-[180px]  max-lg:py-[80px]  max-lg:text-left'>
            <div className='max-w-[1530px] mx-auto px-4'>
                <h2 className='ani1 title text-4xl  max-lg:text-[6.3vw] text-black font-bold mb-9  max-lg:mb-6'>인류의 건강을 선도하는 바이오기업</h2>
                <img className='ani2 max-lg:block hidden w-[100%]' src='/img/main/section1_mo.png' alt='section1_mo.png'/>
                <p className='ani2 mb-16 text-[16px]  max-lg:mt-[30px]  max-lg:mb-0  max-lg:text-[3.7vw]'>일진바이오텍은 인류의 건강과 보다 나은 삶을 위해 세상을 변화시키고 인류를 행복하게 만드는 바이오 회사입니다.<br/>건강기능식품을 연구. 개발. 제조. 전문회사로서 
                    연구개발에서부터 공정 개발. 품질 관리. 임상. 생산에 이르기까지 30여년 이상 축적된 차별화된 R&D 기술과 지속적인 연구개발의 노하우.<br/> 
                    <br/>
                    국내 파트너사들과의 확고한 파트너 십을 바탕으로 세계적인 바이오 기업으로 도약하려고 합니다. 앞으로도 더 큰 도약을 위해 최선을 다할 것을<br className='max-lg:hidden'/>
                    약속드리며 현대인들의 건강을 지키는 고품질의 다양한 제품개발 공급하는 기업으로 발전해 나갈 것에 책임을 다 할 것 입니다.
                </p>
                <img className='ani3 max-lg:hidden w-[100%]' src='/img/main/section1.png' alt='section1.png'/>
            </div>
        </div>
    );
}

