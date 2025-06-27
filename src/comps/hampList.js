import React,{useState} from 'react'
import{NavLink} from 'react-router-dom';
import '../styles/hamplistt.css'

const HampList = props =>{
  const [toggle,setToggle] = useState(false);
  return(
    <div class={props.isHampList?"displayNone":'animate hamplist'}>
      <p onClick={()=>{props.setHampList(prev => !prev)}}>x</p>
    <div onClick={()=>{props.setHampList(prev => !prev)}}>
      <span><NavLink to='/'>Home Page</NavLink></span><br/>



    {!props.id&&<span><NavLink to="/auth">login</NavLink></span>}<br/>


  <span><NavLink to="/about">about</NavLink></span><br/>
  <span><NavLink to="/learn">learn</NavLink></span><br/>
<span><NavLink to=''>NFTs</NavLink></span><br/>
        <span id="itemshop" onClick={()=>{setToggle(prev => !prev)}} class="itemshop">
          <span id="add" className={toggle?'dis':''}><i  class="fas fa-plus"></i></span><span class={!toggle?"dis":''} id="min"><i  class="fas fa-minus"></i></span><span class="dis"> </span> Prices</span>

        <span id="ii" class={toggle?'ii animated':"ii"}><p>bitcon</p><p>ethrenm</p><p>dogocone</p><p>shiba</p></span>


        <span><a href="https://www.facebook.com/JC-model-lifestyle-106670991597132/">Get Started</a></span>
    </div>
    </div>
  )
}
export default HampList;
