import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './index.css'

import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Toaster
      position="top-right"
      toastOptions={{
        style: {
          background: '#ffffff',
          color: '#0f172a',
          border: '1px solid #e2e8f0',
          padding: '16px',
          borderRadius: '16px',
        },
      }}
    />

    <App />

  </React.StrictMode>
)