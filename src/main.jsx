import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GeneralInfo } from './components/GeneraIInfo.jsx'
import { EduExp } from './components/EduExp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo/>
    <EduExp/>
  </StrictMode>,
)
