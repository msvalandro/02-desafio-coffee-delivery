import { createBrowserRouter } from 'react-router-dom'

import { DefaultLayout } from './layouts/default-layout'
import { Checkout } from './pages/checkout/checkout'
import { Confirmed } from './pages/confirmed'
import { Home } from './pages/home/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/checkout', element: <Checkout /> },
      { path: '/confirmed', element: <Confirmed /> },
    ],
  },
])
