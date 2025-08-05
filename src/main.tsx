import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GiftsApp } from './GiftsApp' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div><GiftsApp/></div>
  </StrictMode>,
)
