import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import Blog from './Components/Blog/Blog'
import Notfound from './Components/Notfound/Notfound'
import BlogDetail from './Components/BlogDetail/BlogDetail'
function App() {

  let route = createBrowserRouter([
    {
      path:'', element: <Layout />, children: [
        { index: true, element: <Home /> },
        {path:'blog' , element : <Blog/>},
        {path:'blog/:id' , element : <BlogDetail/>},
        {path:'*' , element : <Notfound/>}
      ]
    }
  ]);
  return (
    <>
        <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
