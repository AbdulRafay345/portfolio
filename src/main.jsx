import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import '@fontsource-variable/geist';
import '@fontsource-variable/geist-mono';
import Router from './Pages/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
