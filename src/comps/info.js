import React from 'react'
import '../styles/info.css'
import Svg from '../imgs/svg.svg'

const Info = () => {
  return(
    <div className="info">
    <h1>The World’s Most trusted</h1>
  <h1>Crypto WebSite</h1>
  <p>
    <p>join <span>10m+</span> users buying and selling <span>250+ cryptocurrencies at true cost</span></p>
  <p>Spend all kind crypto <span>Visa Card and get up to 8% back</span></p>
<p> Grow your <span>portfolio</span> by receiving rewards up to 14.5% on your crypto assets</p>
  </p>
<img className="svg" src={Svg} />
<p>
  <p>join <span>10m+</span> users buying and selling <span>250+ </span></p>
<p>Spend all kind crypto <span>Visa Card and get up to 8% back</span></p>

</p>


    </div>
  )
}
export default Info;
