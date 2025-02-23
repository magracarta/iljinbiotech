import React, { useRef, useState } from 'react';
import ProductInput from '../ui/ProductInput';

export default function AddProduct() {
    const [product,setProduct]=useState({title:"",description:""});
    const [productImg,setProductImg] = useState();
    const [detialimgs, setDetailimgs]= useState([]);
    const pdimginput = useRef(null);
    const detailimginput = useRef(null);

    const productImgHandle = (e)=>{
        setProductImg(e.target.files[0]);
        setProduct(prev=>({...prev, title:e.target.value}));
    };
    const detialImgHandle = (e)=>{
        setDetailimgs(prev=>[...prev, e.target.files[0]]);
    }


    return (
        <div className='py-16 px-9'>
            <h2 className='text-4xl font-bold'>상품 추가</h2>
            <div className='mt-11 flex gap-12'>
                <div onClick={()=>{pdimginput.current.click();}} className='w-[40%] flex items-center justify-center bg-gray-200 cursor-pointer'>
                    {productImg?<img className='w-[100%] h-[100%] object-cover' src={URL.createObjectURL(productImg)}/>:<img className='w-[40%]' src='/img/plusIcon.svg' alt='plusIcon.svg'/>}
                    
                </div>
                <div className='w-[60%]'>
                    <ProductInput text={"이름"} name={"title"} handle={(e)=>{setProduct(prev=>({...prev, title:e.target.value}))}} />
                    <div className='pt-7'></div>
                    <ProductInput text={"설명"} name={"textarea"} handle={(e)=>{setProduct(prev=>({...prev, description:e.target.value}))}} />
                    <input accept='image/*' ref={pdimginput} type='file' className='hidden' onChange={productImgHandle} />
                </div>
            </div>
            <div>
                {detialimgs&& <ul className='flex justify-between flex-wrap mt-8'>
                        {detialimgs.map((_el)=><li className='w-[32%] mb-6 border-2 border-gray-200 h-[500px] overflow-hidden'><img className='w-[100%] h-[100%] object-contain' src={URL.createObjectURL(_el)}/></li>)}
                    </ul>}
                <input accept='image/*' ref={detailimginput} type='file' className='hidden' onChange={detialImgHandle} />
                <button onClick={()=>{detailimginput.current.click();}} className='flex items-center justify-center opacity-50 hover:opacity-100 mt-16'>
                    <img className='mr-2' src='/img/plusIcon.svg' alt='plusIcon.svg'/>상세 이미지 추가
                </button>
            </div>
            <div>
                <button className='notActive w-60 mx-auto mt-12'>상품 추가하기</button>
            </div>
        </div>
    );
}

