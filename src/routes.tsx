import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/default-layout'
import { Checkout } from './pages/checkout'
import { Home } from './pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/checkout', element: <Checkout /> },
    ],
  },
])
