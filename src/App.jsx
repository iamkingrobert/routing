import React from 'react'
import { Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Shop from './Pages/Shop'
import Detail from './Pages/Detail'
import ErrorPage from './Pages/ErrorPage'
import Layout from './Components/Layout'

function App() {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/shop/:id' element={<Detail/>}/>
    <Route path='*' element={<ErrorPage/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={route}/>

  )
}

export default App
