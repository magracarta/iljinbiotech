import React from 'react';

export default function Overview() {
    return (
        <div className='text-center mt-[80px] max-lg:mt-[40px]'>
            <h2 className='text-[36px] max-lg:text-[20px] font-bold text-black'>혁신적인 기술력으로 온가족 건강지킴이 <br className='max-lg:block hidden'/>일진바이오텍이 함께합니다.</h2>
            <p className='mt-[35px] max-w-[1000px] mx-auto mb-[60px] max-lg:text-left'>일진바이오텍은 인류의 건강과 보다 나은 삶을 위해 세상을 변화시키고 인류를 행복하게 만드는 바이오 회사입니다. 건강기능식품을 연구. 개발. 제조. 전문회사로서 연구개발에서부터 공정 개발. 품질 관리. 임상. 생산에 이르기까지 삼십여년 축적된 차별화된 R&D 기술과 지속적인 연구개발의 노하우. <br/><br/>

            국내 파트너사들과의 확고한(공고한) 파트너 십을 바탕으로 세계적인 바이오 기업으로 도약하려고 합니다.<br/>
            앞으로도 더 큰 도약을 위해 최선을 다할 것을 약속드리며<br className='max-lg:hidden'/>
            현대인들의 건강을 지키는 고품질의 다양한 제품개발 공급하는 기업으로 발전해 나갈 것에 책임을 다 할 것 입니다.
            </p>
            <img className="max-lg:h-[200px] max-lg:w-[100%] max-lg:object-cover" src='/img/overview.png' alt='overview.png'/>
        </div>
    );
}

