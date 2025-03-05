import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/main.scss';
import App from './App.jsx'
import { SidebarProvider } from "./context/SidebarContext"; // ✅ Import SidebarProvider


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <SidebarProvider>
          <App />
      </SidebarProvider>,
  </StrictMode>,
)
