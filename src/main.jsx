// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {

//   RouterProvider,
// } from "react-router-dom";
// import { router } from './Routers/Routers.jsx';
// import AuthProvider from './Providers/AuthProvider.jsx';
// import {
//   QueryClient,
//   QueryClientProvider,
// } from '@tanstack/react-query'

// const queryClient = new QueryClient()
// import { HelmetProvider } from 'react-helmet-async';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <HelmetProvider>
//       <QueryClientProvider client={queryClient}>
//         <AuthProvider>
//           <div className='max-w-screen-lg mx-auto'>
//             <RouterProvider router={router} />
//           </div>
//         </AuthProvider>
//       </QueryClientProvider>
//     </HelmetProvider>
//   </React.StrictMode>,
// )





import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider } from "react-router-dom";
import { router } from './Routers/Routers.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient();

const Root = () => {



  return (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <div className='max-w-screen-lg mx-auto'>


              <RouterProvider router={router} />

            </div>
          </AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
