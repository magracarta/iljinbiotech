import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Outlet } from 'react-router';
import LoginContextProvider from './context/LoginContextProvider';

function Admin() {
  const queryClinet = new QueryClient();
  return (
    <>
        <QueryClientProvider client={queryClinet}>
            <LoginContextProvider>
              <Outlet/>
            </LoginContextProvider>
        </QueryClientProvider>
    </>
  )
}

export default Admin