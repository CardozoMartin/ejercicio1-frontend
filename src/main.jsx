import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import 'boostrap/dist/css/boostrap.min.css'
import 'boostrap/dist/css/boostrap.min.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

    <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
