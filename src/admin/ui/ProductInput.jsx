import React from 'react';

export default function ProductInput({text, name , handle}){
    return (
        <div>
            <label className='mb-4'>{text}</label>
            {name==="textarea" ? <textarea onChange={handle} className='h-64' placeholder='텍스트로 작성하는 설명으로 상세페이지 추가시 상세 이미지 하단에 내용이 추가됩니다.' name={name}></textarea>: <input type='text' onChange={handle} name={name} placeholder={text}/>}
            
        </div>
    );
}

