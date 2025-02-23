import React from 'react';
import { useNavigate } from 'react-router';
import MenuBtn from "../ui/MenuBtn";
import { deleteCookie } from '../../util/cookie';
import { useLogin } from '../context/LoginContextProvider';


export default function Nav() {
    const {setUser} = useLogin();
    const navigator = useNavigate();
    const logoutHandler =()=>{
        deleteCookie("isLogin");
        navigator("/admin/login");
        setUser(false);
    }
    return (
        <ul className='flex'>
        <MenuBtn text={"문의"} handle={()=>navigator("/admin/inquiry")}/>
        <MenuBtn text={"상품등록"} handle={()=>navigator("/admin/productRegistration")}/>
        <MenuBtn text={"특허 및 인허가 등록"} handle={()=>navigator("/admin/inquiry")}/>
        <MenuBtn text={"로그아웃"} handle={logoutHandler}/>
    </ul>
    );
}

