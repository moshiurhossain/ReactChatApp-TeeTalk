import React from 'react'
import app from './firebase.config'
import Singin from './pages/Singin'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Resgister from './pages/Resgister'
const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path='/' element={<LayoutOne/>}>
         <Route index element={<Singin/>}/>
         <Route path='/reg' element={<Resgister/>}/>
    </Route>
    </Route>
  ))
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
