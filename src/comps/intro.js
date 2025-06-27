import React from 'react'
import '../styles/intro.css'


const Intro = props => {
  return(
    <div className="intro">
<video loop autoPlay>
<source src={props.video} />
</video>
<div>
<h1>{props.title}</h1>
<button>learn more</button>
</div>
    </div>
  )
}
export default Intro;
