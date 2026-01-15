import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'



import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import "animate.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='container mx-auto px-4'>
    <Navbar/>
    <App />
    </div>
        
  </StrictMode>,
)
