import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router'
import Header from './Layouts/Header'
import Footer from './Layouts/Footer'
import Home from './Pages/Home'
import Navbar from './Layouts/Navbar'
import Copyright from './Components/Copyright'
import Products from './Pages/Products'
const App = () => {
  return (
    <>
    <BrowserRouter>
        <Header />
        <Navbar />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
    </Routes>
        <Footer />
        <Copyright />
    </BrowserRouter>
    </>
  )
}

export default App