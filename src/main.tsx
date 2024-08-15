import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './modules/Auth/Auth.provider.tsx'
import ServiceProvider from './context/ServiceProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ServiceProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ServiceProvider>
    </BrowserRouter>
  </StrictMode>,
)
