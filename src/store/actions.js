export const ADD_TO_CRYPTO = 'ADD_TO_CRYPTO';
export const REMOVE_TO_CRYPTO = 'REMOVE_TO_CRYPTO';
export const LOG_IN = 'LOG_IN';
export const SING_UP = 'SING_UP';

const saveToken = (token) =>{
  localStorage.setItem('token',JSON.stringify({token:token}));
}

export const log_in = (name,password,email) =>{
  return async dispatch =>{
    const res =await fetch('http://localhost:3000/api/auth/login',{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({name,password,email})
    })
    const ress = await res.json();
    saveToken(ress[0].id);

  dispatch({type:LOG_IN,date:ress[0].date,token:ress[0].token,id:ress[0].id,name:name,password:password,email:email})
}}

export const sing_up = (name,password,email) =>{
  return async dispatch =>{
    const res = await fetch('http://localhost:3000/api/auth/singup',{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({name,password,email})
    })
    const ress = await res.json();
saveToken(ress.id);
  dispatch({type:SING_UP,date:ress.date,token:ress.token,id:ress.id,name:name,password:password,email:email})
}}


export const add_to_crypto = () =>{
  return async (dispatch,getState) =>{
    const token = getState().Users.id;
    const res = await fetch(`http://localhost:3000/api/process/${token}`)
    const ress = await res.json();
    console.log(ress,ress.amont);
  dispatch({type:ADD_TO_CRYPTO,amont:+ress.amont,aganst:ress.aganst,kind:ress.kind})
}}
export const remove_to_crypto = (amont,agnast,kind) =>{
  return async (dispatch,getState) =>{
    const token = getState().Users.id;
    fetch('http://localhost:3000/api/process',{
      method:'POST',
      headers:{'content-Type':'application/json'},
      body:JSON.stringify({token,amont,agnast,kind})
    })

  dispatch({type:REMOVE_TO_CRYPTO,amont:amont,aganst:agnast,kind:kind})
}}
// export const remove_to_crypto = (amont,agnast,kind) =>{
//   return{type:REMOVE_TO_CRYPTO,amont:amont,aganst:agnast,kind:kind}
// }
