import Currncy from '../data/currncy'
export const LOG_IN = 'LOG_IN';
export const auth = id =>{
  return async (dispatch,getState) =>{

    const res = await fetch(`http://localhost:3000/api/auth/${id}`)
    const ress = await res.json();

console.log(ress);
  dispatch({type:LOG_IN,token:ress[0].token,name:ress[0].name,email:ress[0].email,id:id,date:ress[0].date})
}}
