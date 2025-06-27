import React from 'react'
import Intro from '../comps/intro';
import Iphone from '../comps/iphone';
import People from '../comps/people';
import VideoIntro from '../imgs/auth.mp4'


const About = () =>{
  return(
<div>
<Intro title='the internet future is creators and users.' video={VideoIntro} />
<People />
<Iphone />

</div>
  )
}
export default About;
