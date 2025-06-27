import React,{useState} from 'react';

import '../styles/header.css';
import{NavLink} from 'react-router-dom';
import Logo from '../imgs/logo.png';




const Header = props => {
const [isTouch,setTouch] = useState(false);
window.addEventListener('scroll',()=>{
if(window.scrollY > 700){
setTouch(false);
}else{
setTouch(true);
}
});
  return(
  <header className={!isTouch?'touched':''}>
<img alt="" src={Logo} />

    <ul>
    <NavLink className="link" to='/'><li><span> Home page</span></li></NavLink>
  <NavLink className="link" to='about'><li><span> About</span></li></NavLink>
  <li onClick={()=>{props.setHampList(prev => !prev)}}><span><i class="fas fa-list"></i></span></li>
<NavLink className="link" to='prices'><li><span> Prices</span></li></NavLink>
  <NavLink className="link" to='auth'><li><span> login</span></li></NavLink>
  <NavLink className="link" to='learn'><li><span> learn</span></li></NavLink>
<NavLink className="link" to=''><li><span> NFTs <span className="soon"> soon</span></span></li></NavLink>
    </ul>
  </header>
  )
}
export default Header;
