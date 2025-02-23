import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCookie } from '../../util/cookie';

const loginContext= createContext();

export default function LoginContextProvider({children}) {
    const [user, setUser] = useState(false);
    useEffect(()=>{
        getCookie("isLogin")!==null&&setUser(true);
    },[]);
    
    return (
        <loginContext.Provider value={{user, setUser}}>
            {children}
        </loginContext.Provider>
    );
}

export function useLogin(){
    return useContext(loginContext);
}

