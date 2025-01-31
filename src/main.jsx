import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApi } from './component/ContextApi.jsx'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <BrowserRouter>
    <ContextApi>
    <App />
    </ContextApi>
    </BrowserRouter>
   
 
  </StrictMode>,
)
