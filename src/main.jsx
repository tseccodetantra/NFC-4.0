import { createRoot } from 'react-dom/client'
import './app.css'
import { CarouselDemo } from './components/ui/carouselDemo'

createRoot(document.getElementById('root')).render(
  <main>
    <CarouselDemo />
  </main>,
)
