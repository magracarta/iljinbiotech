import React, { useState } from 'react';
import ReactModal from 'react-modal';
import AddProduct from '../component/AddProduct';

ReactModal.setAppElement('#root');
export default function ProductRegistration() {
    const [op, setOp]= useState(true);
    return (
        <div>
            <div className='flex items-top justify-between'>
                <h1 className='text-4xl font-bold'>상품 등록</h1>
                <div className='flex gap-2 w-96 mt-10'>
                    <button>상품 추가</button>
                    <button>순서 변경</button>
                </div>
            </div>
            <div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
                <div>item</div>
            </div>
            <ReactModal
                ariaHideApp={false}
                appElement={document.getElementById('root')}
                isOpen={op}
                onRequestClose={() => setOp(false)} 
                shouldCloseOnOverlayClick={true}
                    
            >
                <AddProduct/>
            </ReactModal>
        </div>
    );
}

