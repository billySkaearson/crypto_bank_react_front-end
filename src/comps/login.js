import React,{useState} from 'react'
import '../styles/loginr.css'
import Svg from '../imgs/login.svg'
import Svgg from '../imgs/done.svg'
import {useDispatch} from 'react-redux';
import * as actions from '../store/actions';


const Login = props => {
  const [isEye,setEye] = useState(true);
  const [isFoucs,setFoucs] = useState(false);
  const [name,setName] = useState('');
  const [password,setPassword] = useState('');
  const [email,setEmail] = useState('');
  const [ePassword,setEpassword] = useState(false);
  const [eName,setEname] = useState(false);
  const [eEmail,setEemail] = useState(false);
  const [done,setDone] =useState(false);
  const dispatch = useDispatch();
  const toggleEye = () =>{setEye(prev=> !prev)}

const handlePassword = e =>{

  if(e.target.value.trim().length === 8){setEpassword(false)}else{setEpassword(true)}
  setPassword(e.target.value);
}
const handleEmail = e =>{
  setEmail(e.target.value);
  if(e.target.value.trim().length === 0){setEemail(true)}else{setEemail(false)}

}
const handleName = e =>{
setName(e.target.value);
if(e.target.value.trim().length === 0){setEname(true)}else{setEname(false)}

}
const HandleLogin = () =>{if(eEmail || ePassword || eName){}else{dispatch(actions.log_in(name,password,email)); setDone(true) }}
const Handlesing = () =>{if(eEmail || ePassword || eName){}else{dispatch(actions.sing_up(name,password,email)); setDone(true)}}
  return(<div className="main">
    <div className="login">
      <img src={Svg} />

    <input className="input" onChange={handleName} required type='text' placeholder="enter your name"/>
  {eName &&<p>name is required</p>}
<input className="input" onChange={handleEmail} required type='email' placeholder="enter your email"/>
{eEmail &&<p>please enter a vaild email</p>}
<div  className={isFoucs?"border":'input'}>
<span className={isEye?'':"displayNone"} onClick={toggleEye}><i class="far fa-eye"></i></span>
<span className={!isEye?'':"displayNone"} onClick={toggleEye}><i class="fas fa-eye-slash"></i></span>
<input onFocus={()=>setFoucs(true)} onBlur={()=>setFoucs(false)} required onChange={handlePassword} type={isEye?'password':'text'} placeholder="enter your password"/></div>

<div>
  {ePassword &&<p>enter a vaild password must be 8</p>}

<button onClick={HandleLogin}>log in</button>
<button onClick={Handlesing}>sing up</button>
</div>
    </div>
<div className={done?"login2":''}>
  <img src={Svgg} />
</div>
  </div>
  )
}
export default Login;
