import React from 'react'
import Login from './pages/login'
import HeroSection from './pages/students/HeroSection'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import { RouterProvider } from 'react-router'
import Courses from './pages/students/Courses'

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element:
          <>
            <HeroSection />
            <Courses />
          </>
      },
      {
        path:"login",
        element: <Login />
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={appRouter}/>
  )
}

export default App