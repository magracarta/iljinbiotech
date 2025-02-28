import React from 'react';

export default function Vision() {
    return (
        <div className='border border-[#CBCBCB] rounded-xl mt-[60px] max-lg:mt-[50px] px-[50px] flex on py-[100px] justify-center items-center gap-[60px] max-lg:block max-lg:px-[20px] max-lg:py-[40px]'>
            <p className='text-[25px] max-lg:text-[16px] max-lg:pt-[30px] ani2 pb-8 max-lg:pb-7 text-left w-[60%] max-lg:w-[100%]'>
                주)일진바이오텍은 삼십여년의 사업 노하우를 바탕으로 원대한 미래의 생명공학의 창조와 경쟁력을
                키우기위해 주식 상장을 계획하고 있으며 이에 기본 요건이되는 주식증자를 외부자본의 도움 없이 오로지 
                자사의 자체 능력을 바탕으로 진행해 나가고 있습니다.
            </p>
            <img className='mx-auto w-[40%]  max-lg:bg[60px] ani3 max-lg:w-[100%]' src='/img/stock.png' alt='stock.png'/>
        </div>
    );
}

