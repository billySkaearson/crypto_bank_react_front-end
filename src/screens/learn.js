import React from 'react';
import Intro from '../comps/intro';
import Info from '../comps/info';
import Iphone from '../comps/iphone';
import Static from '../comps/static';
import '../styles/home.css'
import VideoIntro from '../imgs/learn.mp4'

const Learn = () =>{
  return(
    <div>
<Intro title='What Is Crypto Currncy' video={VideoIntro} />
<Info />
<Static />
<Iphone />
    </div>
  )
}
export default Learn;
