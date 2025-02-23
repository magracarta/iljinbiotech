import React from 'react';
import { useLogin } from '../context/LoginContextProvider';
import { Navigate } from 'react-router';

export default function ProtectedRoute({children}) {
    const {user} = useLogin();
    if(!user) return <Navigate to="/admin/login" replace />
    return children;
}

