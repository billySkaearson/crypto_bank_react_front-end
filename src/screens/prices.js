import React,{useState} from 'react'
import '../styles/prices.css'
import Svg from '../imgs/statics.svg'
import Svgg from '../imgs/back.jpg'
import Static from '../comps/static'

const Prices = () => {
    const inialState = [
{id:1,name:'Bitcon',code:'BTC',price:'399,93$',earns:"20%"},
{id:1,name:'Ethrem',code:'ETH',price:'393,93$',earns:"20%"},
{id:1,name:'Dogocone',code:'DOGO',price:'392,93$',earns:"20%"},
{id:1,name:'Shiba',code:'SHI',price:'39,93$',earns:"20%"},
{id:1,name:'Bitcon',code:'BTC',price:'399,93$',earns:"20%"},
{id:1,name:'Ethrem',code:'ETH',price:'393,93$',earns:"20%"},
{id:1,name:'Dogocone',code:'DOGO',price:'392,93$',earns:"20%"},
{id:1,name:'Shiba',code:'SHI',price:'39,93$',earns:"20%"},
{id:1,name:'Bitcon',code:'BTC',price:'399,93$',earns:"20%"},


    ];
    const [data,setData] = useState(inialState);
  return(
    <div className="prices">



<Static inialState={data} />




    </div>
  )
}
export default Prices;
