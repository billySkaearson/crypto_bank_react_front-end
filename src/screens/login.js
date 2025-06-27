import React,{useState} from 'react';
import auth from '../imgs/auth.mp4';
import Login from '../comps/login';
import Payment from '../comps/payment';
import {useSelector} from 'react-redux';

import '../styles/login.css'


const Auth = props =>{
const userData = useSelector(state => state.Users);
const trans = useSelector(state => state.Trans.trans);
const userAccount = useSelector(state => state.Account);
const [add,setAdd] = useState(false);
const transedlist = [];
for(const key in userAccount.currncy){
  transedlist.push({
    id:key,
    kind:userAccount.currncy[key].kind,
    amont:userAccount.currncy[key].amont,

  });}

  return(
    <div className='auth'>
    {userData.id === null &&  <Login />}
  {add&& <Payment />}
  <div className='page'>
      <div className='cont'>
 <h1>your account </h1>

<div>
  <p>Frist name : {userData.name}</p>
<p>Email : {userData.email}</p>
<p>Country : jakellly</p>
<p>Starting Date : {userData.date}</p>
<button onClick={()=> setAdd(prev => !prev)}>add</button>
</div>

<div>
  <p>Total Amount : {userAccount.totalAmont}$</p>
  <p>score : a4</p>
{transedlist.map((item,index)=>{return(
  <p> {item.kind}:{item.amont} </p>)})}

</div>
<div>
  {trans.map((item,index)=>{return(
  <p>transction  {item.agnast}  <span className={item.case === '+'?"green":'red'}>{item.case} {item.amont}{item.kind}</span> date:{item.date}</p>
  )})}


</div>
    </div>
</div>
<video autoPlay loop>
  <source src={auth} />
</video>

    </div>
  )
}
export default Auth;
