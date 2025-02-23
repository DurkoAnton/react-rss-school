import { StrictMode,createContext  } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Parent from './Parent.tsx'

// Create a new context and export

createRoot(document.getElementById('root')!).render(
<StrictMode><Parent /></StrictMode>
)
