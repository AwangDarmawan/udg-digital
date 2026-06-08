import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import "@fontsource/bebas-neue";
import "@fontsource/playfair-display";

// AOS.init({
//   duration: 1000,
//   once: true,
//     offset: 50,
// });
AOS.init({
  duration: 1200,
  easing: "ease-out-cubic",
  once: true,
  offset: 80,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
