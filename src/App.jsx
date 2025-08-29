import React from 'react'
import app from './firebase.config'
import Singin from './pages/Singin'
import { createBrowserRouter, Route, RouterProvider } from 'react-router'
import { createRoutesFromElements } from 'react-router'
import LayoutOne from './layout/LayoutOne'
import Resgister from './pages/Resgister'
import { ToastContainer, toast } from 'react-toastify';
import LayoutTwo from './layout/LayoutTwo'
import Home from './pages/Home'
import ChatSidebar from './pages/ChatSidebar'


const App = () => {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
            <Route path='/' element={<LayoutOne/>}>
                <Route index element={<Singin/>}/>
                <Route path='/reg' element={<Resgister/>}/>
            </Route>

            <Route path='/layoutTwo' element={<LayoutTwo/>}>
                <Route path='/layoutTwo/home' element={<Home/>}/>
                <Route path='/layoutTwo/alluser' element={<ChatSidebar/>}/>
            </Route>
          
    </Route>
  ))
  return (
    <>
       <RouterProvider router={myRoute}/>
        <ToastContainer />
    </>
  )
}

export default App
