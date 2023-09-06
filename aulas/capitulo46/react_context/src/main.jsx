import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Contact from './routes/Contact.jsx'
import Home from './routes/Home.jsx'

import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleColorContextProvider } from './context/TitleColorContext.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "teste",
        element: <Navigate to="/" />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      <TitleColorContextProvider>
        <RouterProvider router={router} />
      </TitleColorContextProvider>
    </CounterContextProvider>
  </React.StrictMode>,
)
