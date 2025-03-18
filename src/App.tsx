import { useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Contact, action as contactAction } from './pages/Contact'
import { Pizza } from './types'
import { PizzaDetails } from './pages/PizzaDetails'

function Root() {
  const [cart, setCart] = useState<Pizza[]>([])

  const handleAddToCart = (pizza: Pizza) => {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === pizza.id)
      if (exists) {
        return prev.filter((item) => item.id !== pizza.id)
      }
      return [...prev, pizza]
    })
  }

  return (
    <Layout cart={cart}>
      <Outlet context={{ cart, onAddToCart: handleAddToCart }} />
    </Layout>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />}>
      <Route index element={<Home/>} />
      <Route path="contact" element={<Contact />} action={contactAction}/>       
      <Route path="pizza/:id" element={<PizzaDetails />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
