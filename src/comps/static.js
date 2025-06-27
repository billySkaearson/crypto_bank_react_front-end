import React,{useState} from 'react'
import '../styles/static.css'
import Svg from '../imgs/statics.svg'
import Svgg from '../imgs/back.jpg'

const Static = props => {
  const inialState = props.inialState ? props.inialState : [
{id:1,name:'Bitcon',code:'BTC',price:'399,93$',earns:"20%"},
{id:1,name:'Ethrem',code:'ETH',price:'393,93$',earns:"20%"},
{id:1,name:'Dogocone',code:'DOGO',price:'392,93$',earns:"20%"},
{id:1,name:'Shiba',code:'SHI',price:'39,93$',earns:"20%"}
    ];

  const[data,setData] = useState(inialState);

  return(
    <div className="static">

  <figure>

  {data.map((item,index)=>{return( 
<div><span>{item.name}</span><span>{item.code}</span><span>{item.price}$</span><span>{item.earns}</span><img src={Svg} /><button>trade</button></div>
)})}


</figure>
    </div>
  )
}
export default Static;
