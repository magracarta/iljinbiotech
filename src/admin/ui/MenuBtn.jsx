import React from 'react';

export default function MenuBtn({text, handle}) {
    return (
        <li className='cursor-pointer ml-14 hover:font-bold hover:border-b-2 hover:border-black h-7' onClick={handle}>{text}</li>
    );
}

