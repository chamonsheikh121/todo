import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { ThemeProvider } from './providers/theme_provider'
import routes from './routes/routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <ThemeProvider>
     <RouterProvider router={routes}/>
   </ThemeProvider>
  </StrictMode>,
)
