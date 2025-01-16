import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'

import { App } from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster position="bottom-right" richColors />
    <App />
  </StrictMode>,
)
