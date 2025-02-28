import React, { useState } from 'react';
import ReactModal from 'react-modal';

export default function ProductThumnail({img,title,sub,description,cn}) {
    const [op, setOp]=useState(false);
    return (
        <div className={`w-[calc(33.333%-13.333px)] text-center max-lg:w-[100%] shadow-center rounded-md ani`}
        style={{ animationDuration: `${(cn) * 400}ms` }}
        >
            <div className='pt-[100px] max-lg:pt-[10.70vw] cursor-pointer ' onClick={()=>{setOp(true)}}>
                <img className='w-[50%] mx-auto pb-[166px] max-lg:pb-[20.8vw]' src={`/img/products/${img}`} alt={img}/>
                <span className='block py-[35px] text-[20px] border-t border-[#F4F4F4] text-black font-regular max-lg:text-[3.73vw]
                 max-lg:py-[5.47vw] absolute bottom-0 left-0 w-[100%]
                '>{title}</span>
            </div>

             <ReactModal
                ariaHideApp={false}
                appElement={document.getElementById('root')}
                isOpen={op}
                onRequestClose={() => setOp(false)} 
                shouldCloseOnOverlayClick={true}
            >
                <div className='relative p-[50px] max-lg:p-[30px] min-h-[600px] flex flex-col justify-center'>
                    <div className='w-[23px] h-[16px] absolute right-[0px] top-[0px] max-lg:block cursor-pointer' onClick={()=>{setOp(false)}}>
                        <i className={`w-[100%] h-[1px] absolute left-0 top-[50%] rotate-45 bg-black`}></i>
                        <i className={`w-[100%] h-[1px] absolute left-0 top-[50%] -rotate-45 bg-black`}></i>
                    </div>
                    <img className='mx-auto max-lg:w-[60%] max-w-[327px]' src={`/img/products/${img}`} alt={img}/>
                    <span className='block text-center text-[20px] text-black font-medium pt-[30px]'>{title}</span>
                    <p className='block text-center my-2'>{sub}</p>
                    <p className='pt-14 max-lg:pt-7 max-w-[600px] mx-auto leading-[1.6em] max-lg:text-[14px]'>{description}</p>
                </div>
            </ReactModal>
        </div>
    );
}

