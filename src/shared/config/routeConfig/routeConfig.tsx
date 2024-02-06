import { createBrowserRouter } from 'react-router-dom'
import App from 'app/App'
import React, { Suspense } from 'react'
import { AboutPage } from 'pages/AboutPages'
import { ContactPage } from 'pages/ContactPages'
import { NotFoundPage } from 'pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'about/',
        element: <Suspense fallback={'...'}><AboutPage /></Suspense>
      },
      {
        path: 'contact/',
        element: <Suspense fallback={'...'}> <ContactPage /></Suspense>
      }
    ],
    errorElement: <NotFoundPage />
  }
])
