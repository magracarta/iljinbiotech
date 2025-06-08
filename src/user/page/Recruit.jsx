import React from 'react';
import RecruitIcon from '../component/recruit/RecruitIcon';
import RecruitArrow from '../component/recruit/RecruitArrow';

export default function Recruit() {
    return (
        <div className='pt-[88px] max-lg:pt-[120px] on'>
            <div className='max-w-[1530px] px-4 mx-auto pt-[80px] pb-[180px]  max-lg:pt-[30px]  max-lg:pb-[80px] '>
                <div className='text-center'>
                    <h2 className='ani1 text-[55px] font-bold mb-7 max-lg:text-[28px] max-lg:mb-5'>인재채용</h2>
                    <p className='ani2 mb-14 max-lg:text-[14px] max-lg:mb-6'>우리 회사는 건강식품 분야에서 성장하는 바이오회사로, <br className='hidden max-md:hidden'/>혁신적이고 창의적인 인재를 모집합니다.<br className='max-md:hidden'/>
                        건강과 웰빙에 <br className='hidden max-md:hidden'/>대한 열정을 가지고, 팀워크와 목표 달성에 강한 의지를 <br className='hidden max-md:hidden'/>가진 분들을 찾고 있습니다.<br className='max-md:hidden'/> 
                    함께 건강한 미래를 만들어갈 <br className='hidden max-md:hidden'/>열정적인 인재들의 많은 지원을 바랍니다.</p>
                </div>
                <div className='flex justify-center bg-[#F7F7F7] px-[25px] py-[60px] rounded-[500px] max-lg:justify-between
                    max-lg:flex-wrap max-lg:gap-0 max-lg:rounded-[20px] max-lg:space-btween  max-lg:gap-y-4 max-lg:py-[30px]
                '>
                    <RecruitIcon img='recruit1.svg' text='입사지원' idx={1}/>
                    <RecruitArrow/>
                    <RecruitIcon img='recruit2.svg' text='서류전형' idx={2}/>
                    <RecruitArrow/>
                    <RecruitIcon img='recruit3.svg' text='1차면접' idx={3}/>
                    <RecruitArrow/>
                    <RecruitIcon img='recruit3.svg' text='2차면접' idx={4}/>
                    <RecruitArrow/>
                    <RecruitIcon img='recruit4.svg' text='최종합격' idx={5}/>
                </div>
            </div>
        </div>
    );
}
 
