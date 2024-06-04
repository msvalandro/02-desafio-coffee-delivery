import './global.css'

import { RouterProvider } from 'react-router-dom'

import { CheckoutProvider } from './contexts/checkout-provider'
import { router } from './routes'

export function App() {
  return (
    <CheckoutProvider>
      <RouterProvider router={router} />
    </CheckoutProvider>
  )
}
