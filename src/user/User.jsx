import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Outlet } from 'react-router';
import Header from './component/Header';
import Footer from './component/Footer';

function User() {
  const queryClinet = new QueryClient();
  return (
    <div>
        <Header/>
        <QueryClientProvider client={queryClinet}>
            <Outlet/>
        </QueryClientProvider>
        <Footer/>
    </div>
  )
}

export default User