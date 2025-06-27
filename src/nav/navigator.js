import React,{useState} from 'react'
import {Route,BrowserRouter,Routes,HashRouter} from 'react-router-dom'
// pages
import Home from '../screens/home'
import About from '../screens/about'
import Prices from '../screens/prices'
import Learn from '../screens/learn'
import Auth from '../screens/login'

//components
import Header from '../comps/header'
import Footer from '../comps/footer'
import HampList from '../comps/hampList'


const Navigation = () =>{
  const [isHampList,setHampList] = useState(true);
  return(

<HashRouter>
  <Header setHampList={setHampList} />
  <HampList isHampList={isHampList} setHampList={setHampList} />
 {/* <BrowserRouter> */}
 <Routes>
  <Route path='/' exact element={<Home />} />
 <Route path='/about' exact element={<About />} />
 <Route path='/prices' exact element={<Prices />} />
  <Route path='/learn' exact element={<Learn />} />
  <Route path='/auth' exact element={<Auth />} />


 </Routes>
 <Footer />
 {/* </BrowserRouter> */}
</HashRouter>


)
}
export default Navigation;
