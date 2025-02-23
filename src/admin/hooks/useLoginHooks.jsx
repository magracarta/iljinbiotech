import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { setCookie } from '../../util/cookie';

const loginInfo = ({
    id:process.env.REACT_APP_ADMIN_ID,
    pw:process.env.REACT_APP_ADMIN_PW
});

const useLoginHooks=(user, setUser)=>{
    const [id,setId] = useState("");
    const [password, setPassword]  = useState("");
    //어드민 정보
   
    //버튼 활성화
    const [isButtonActive, setIsButtonActive]  = useState(false);
    const navigator = useNavigate();

    useEffect(()=>{
        if(user) navigator("/admin");
    },[user,navigator]);
    
    useEffect(()=>{
        if(id !=="" && password !== "")setIsButtonActive(true);
        else setIsButtonActive(false);
    },[id, password])

    const loginhandle = ()=>{
        if(id === loginInfo.id && password === loginInfo.pw){
            setUser(true);
            setCookie("isLogin",user,1);
            navigator("/admin");
        }else{
            alert("아이디나 비밀번호가 일치하지 않습니다.");
        }
    }
    

    return {id,setId ,password, setPassword, isButtonActive, loginhandle}
}

export default useLoginHooks;