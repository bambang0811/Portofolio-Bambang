import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
});

// Ensure AOS recalculates positions after all assets load (prevents flicker)
window.addEventListener("load", () => {
  try {
    AOS.refresh();
  } catch (e) {
    // ignore
  }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
