import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import '@fontsource-variable/figtree'
import '@fontsource-variable/inter'
import '@fontsource/courgette'
import Home from './Home.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
)
