import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MultiDocUpload from './pages/MultiDocUpload'
import MultipleImage from './pages/MultipleImage'
import Navbar from './pages/Navbar'
import SingleImageUpload from './pages/SingleImageUpload'
export default function App() {
  return <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<h1>Home Page</h1>}></Route>
      <Route path='/multiple-image' element={<MultipleImage />}></Route>
      <Route path='/single-image' element={<SingleImageUpload />}></Route>
      <Route path='/multiDoc-upload' element={<MultiDocUpload />}></Route>
      <Route path='*' element={<h1>Page Not Found</h1>}></Route>
    </Routes>


  </BrowserRouter>
}
