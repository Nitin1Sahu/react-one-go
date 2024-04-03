import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home, About, Contact } from './components'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import './index.css'
import './styles/header/header.css'
import './styles/footer/footer.css'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />
      }, {
        path: "about",
        element: <About />
      }, {
        path: "contact",
        element: <Contact />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
