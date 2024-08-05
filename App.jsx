import './App.css'
import Header from './components/Header'
import Onsale from './components/Onsale'
import New from './components/New'
import Brands from './components/Brands'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Product from './components/Product'
import Browse from './components/Browse'
import CommentsList from './components/ComentsList'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Marquee/>
    <Product/>
    <Browse/>
    <CommentsList/>
    <Routes>
     <Route path='/onsale' element={<Onsale/>}/>
     <Route path='/nwarive' element={<New/>}/>
     <Route path='/brands' element={<Brands/>}/>
    </Routes>
    </>
  )
}

export default App
