import Currncy from '../data/currncy'
export const GET_DATA = 'GET_DATA';
export const get_account = (token) =>{
  return async (dispatch,getState) =>{

    const res = await fetch(`http://localhost:3000/api/process/${token}`)
    const ress = await res.json();
    const data = {};
    for(const i in ress){
      data[ress[i].kind] = new Currncy(ress[i].kind,ress[i].amont)

      // data.push({[ress[i].kind]:new Currncy(ress[i].kind,ress[i].amont)})
    }
    let totalAmont = 0;
    for(const i in ress){
   totalAmont = totalAmont + ress[i].amont
}
console.log(data,ress);
  dispatch({type:GET_DATA,data:data,totalAmont:totalAmont})
}}
