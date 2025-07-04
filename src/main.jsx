import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './app.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200,
  once: true,
  offset: 50,
  easing: 'ease-out-cubic'
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
