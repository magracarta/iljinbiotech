
export const setCookie=(name, value, hours)=>{
    const date = new Date();
    date.setTime(date.getTime() + (hours*60*60^1000));
    const expires = "expries" + date.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/";
};


export const getCookie=(name)=>{
    const nameEq = name + "=";
    const ca = document.cookie.split(';');
    
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length); // 공백 제거
        if (c.indexOf(nameEq) === 0) return c.substring(nameEq.length, c.length); // 쿠키 값 반환
    }
    
    return null; // 쿠키가 없으면 null 반환
};

export const deleteCookie=(name)=> {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; 
}
