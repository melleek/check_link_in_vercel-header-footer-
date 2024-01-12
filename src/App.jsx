import React from 'react'
import "./App.css"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'
import Home from './pages/Home/Home'
import Layout from './Layout/Layout'
import Portfolio from './pages/Portfolio/Portfolio'
import News from './pages/News/News'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "portfolio",
          element: <Portfolio/>
        },
        {
          path: "news",
          element: <News/>
        },
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
