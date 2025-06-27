import React,{useState} from 'react'
import '../styles/people.css'
import Me_billy from '../imgs/me_billy.jpg'
import Person1 from '../imgs/person1.jpg'
import Person2 from '../imgs/person2.jpg'
import Person3 from '../imgs/person3.jpg'


const People = props => {

  const initailState =[
{id:1,img:Me_billy,name:"Billy Skareson"},
{id:1,img:Person1,name:"Alex Lineron"},
{id:1,img:Person2,name:"Tom Wilk"},
{id:1,img:Person3,name:"Alen Serlon"},
    ]
    const [state,setState] = useState(initailState);
  return(
    <div className="people">
<h1>Meet our devolpers</h1>
<figure>
{state.map((item,index)=>{return( 
<div kay={index}><img src={item.img} /><p>{item.name}</p></div>
)})}

{/*<div><img src="https://images.pexels.com/photos/1586996/pexels-photo-1586996.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /><p>jake larret</p></div>
<div><img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /><p>bolly whytson</p></div>
<div><img src="https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" /><p>tom johnson</p></div>*/}

</figure>
    </div>
  )
}
export default People;
