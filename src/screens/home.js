import React,{useState,useEffect} from 'react';
import Intro from '../comps/intro';
import Info from '../comps/info';
import Iphone from '../comps/iphone';
import Static from '../comps/static';
import Login from '../comps/login';
import '../styles/home.css'
import VideoIntro from '../imgs/introv.mp4'

import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../model/getData'
import * as action from '../model/account'


const Home = () =>{
  const [login,setLogin] = useState(false);

  const dispatch = useDispatch();
  useEffect(()=>{
    const data = localStorage.getItem('token');
    if(!data){
    setLogin(true)
    }else{
      setLogin(false)
    const {token} = JSON.parse(data);

   dispatch(actions.auth(token));
   dispatch(action.get_account(token));

    }
  },[dispatch])
  return(
    <div>
<Intro title='Start right now ' video={VideoIntro} />
<Info />
  {!login &&  <Login />}
<Static />
<Iphone />
    </div>
  )
}
export default Home;
