import React,{useState} from 'react'
import '../styles/loginr.css'
import Svg from '../imgs/login.svg'
import Svgg from '../imgs/done.svg'
import {useDispatch,useSelector} from 'react-redux'
import * as actions from '../store/actions'


const Payment = props => {
  const [isEye,setEye] = useState(true);
  const [isFoucs,setFoucs] = useState(false);
  const [done,setDone] =useState(false);
  const [receve,setReseve] =useState(false);
  const [coin,setCoin] = useState('');
  const [price,setPrice] = useState();
  const [agnast,setAgnast] = useState();
  const [eprice,setEprice] = useState(false);
  const [ecoin,setEcoin] = useState(false);
  const [eagnast,seteagnast] = useState(false);
  const ttoken = useSelector(state => state.Users.id);
  const dispatch = useDispatch();
  const toggleEye = () =>{setEye(prev=> !prev)}

  const handleAgnast = e =>{

    if(e.target.value.trim().length !== 8){seteagnast(true)}else{seteagnast(false)}
    setAgnast(e.target.value);
  }
  const handlePrice = e =>{
    setPrice(e.target.value);
    if(e.target.value.trim().length === 0 || e.target.value.match(/[a-zA-Z]/g)){setEprice(true)}else{setEprice(false)}

  }
  const handleCoin = e =>{
  setCoin(e.target.value);
  if(e.target.value.trim().length === 0){setEcoin(true)}else{setEcoin(false)}

  }
  const HandleSend = () =>{dispatch(actions.remove_to_crypto(+price,agnast,coin)); setDone(true)}
  const HandleReseve = async() =>{
     setReseve(true);
    await dispatch(actions.add_to_crypto(+price,agnast,coin));
     setDone(true);}
console.log(coin);
  return(<div className='main'>
    <div className="login">
      <img src={Svg} />
    <input className="input" onChange={handlePrice} placeholder="enter an amont"/>
    {eprice &&<p>enter valid number</p>}
<select className="input" value={coin} onChange={handleCoin}>
  <option value="">select coin</option>
  <option value="btc">btc</option>
  <option value="etc">etc</option>
  <option value="ict">ict</option>
</select>
{ecoin &&<p>enter valid currncy</p>}
<div  className={isFoucs?"border":'input'}>
<span className={isEye?'':"displayNone"} onClick={toggleEye}><i class="far fa-eye"></i></span>
<span className={!isEye?'':"displayNone"} onClick={toggleEye}><i class="fas fa-eye-slash"></i></span>
<input onFocus={()=>setFoucs(true)} onBlur={()=> setFoucs(false)} onChange={handleAgnast} type={isEye?'password':'text'} placeholder="enter the recever"/></div>

<div>
  {eagnast &&<p>enter a vaild recever </p>}
<button onClick={HandleSend}>send</button>
<button onClick={HandleReseve}>receve</button>
</div>
    </div>
<div className={done?'login2':''}>
<img src={Svgg} />
</div>
<div className={receve?'login2':''}>
<img src={Svg} />
<p>{ttoken}</p>
</div>

  </div>
  )
}
export default Payment;
