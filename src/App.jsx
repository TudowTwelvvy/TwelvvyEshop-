import React, { useState } from 'react';
import Header from './sections/Header';
import Main from './sections/Main';
import Footer from './sections/Footer';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes,
  Link,
  Outlet,
  ScrollRestoration
} from "react-router-dom";
import Home from './pages/Home';
import Signin from './pages/Signin';
import { productsData } from "./api/api";
import Cart from './pages/Cart';
import Register from './pages/Register';


 
const Layout = ()=>{
  return (
    <div>
      <Header/>
      <ScrollRestoration/>
      <Outlet/>
      <Footer/>
    </div>
  )
    
    
}

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    
       <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Register/>}></Route>
        
      </Route>
    
  ));
  

  return (
    <main className=""  >
      <RouterProvider router={router}></RouterProvider>
    </main >
  )
}

export default App