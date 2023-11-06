import React from 'react'
import ReactDOM from 'react-dom/client'


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './index.css'
import AdminView from './views/AdminView.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <AdminView/>
    </QueryClientProvider>
  </React.StrictMode>,
)
