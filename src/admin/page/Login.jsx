import React from 'react';
import { useLogin } from '../context/LoginContextProvider';
import useLoginHooks from '../hooks/useLoginHooks';

export default function Login() {
    const {user,setUser} = useLogin();
    const { id,setId ,password, setPassword, isButtonActive, loginhandle } = useLoginHooks(user,setUser);
    
    return (
        <div className='p-24'>
            <div className='m-auto max-w-[503px] px-20 py-20 border border-gray-300 rounded-xl'>
                <div className='text-5xl uppercase text-black mb-16'>
                    <h1 className='font-bold text-center'>iljinbiotEch<br/>admin</h1>
                </div>
                <div className=''>
                    <label>아이디</label>
                    <input type='text' name='id' value={id} onChange={(e)=>setId(e.target.value)} placeholder='아이디'/>
                </div>
                <div className='mt-6'>
                    <label>비밀번호</label>
                    <input type='password' name='pw' value={password} onChange={(e)=>{setPassword(e.target.value);}} 
                        onKeyDown={(e)=>{e.key === "Enter" && loginhandle();}}
                    autoComplete="off" placeholder='비밀번호'/>
                </div>
                <div className='mt-9'>
                    <button className={isButtonActive?"":'notActive'} onClick={loginhandle}>로그인</button>
                    <button className='line'>사용자 페이지 이동</button>
                </div>
            </div>

        </div>
    );
}

