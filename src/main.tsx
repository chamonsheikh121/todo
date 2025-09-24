import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import { ThemeProvider } from './providers/theme_provider'
import routes from './routes/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
    <ThemeProvider>
     <RouterProvider router={routes}/>
   </ThemeProvider>
   </Provider>
  </StrictMode>,
)
