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
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <React.StrictMode>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <div className='max-w-screen-lg mx-auto'>
              <div className={`theme-${theme}`}>
                <button className="theme-toggle" onClick={toggleTheme}>
                  {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
                <RouterProvider router={router} />
              </div>
            </div>
          </AuthProvider>
        </QueryClientProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
