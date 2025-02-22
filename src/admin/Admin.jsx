import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { Outlet } from 'react-router';

function Admin() {
  const queryClinet = new QueryClient();
  return (
    <div>
        <QueryClientProvider client={queryClinet}>
            <Outlet/>
        </QueryClientProvider>
    </div>
  )
}

export default Admin