import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About.jsx'
// import Services from './components/Serv/Services.jsx'
import MyWork from './components/MyWork/MyWork.jsx'
import Contact from './components/Contact/Contact.jsx'
import Hero from './components/Hero/Hero.jsx'
import App from './App.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Hero />
      },
      {
        path: '/home',
        element: <Hero />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/portfolio",
        element: <MyWork />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
