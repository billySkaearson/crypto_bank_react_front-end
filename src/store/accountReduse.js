import {ADD_TO_CRYPTO,REMOVE_TO_CRYPTO} from './actions'
import {GET_DATA} from '../model/account'
import Currncy from '../data/currncy'
const initialState = {
  currncy:{},
  totalAmont:0
}

export default (state=initialState,actions) =>{
  switch (actions.type) {
    case ADD_TO_CRYPTO:
    if(state.currncy[actions.kind]){
const prod = new Currncy(actions.kind,state.currncy[actions.kind].amont + actions.amont);
      return{
        ...state,
        currncy:{...state.currncy,[actions.kind]:prod},
        totalAmont:state.totalAmont + actions.amont
      }
    }else{
const up = new Currncy(actions.kind,actions.amont);
      return{
        ...state,
        currncy:{...state.currncy,[actions.kind]:up},
        totalAmont:state.totalAmont + actions.amont
      }
    }
   case REMOVE_TO_CRYPTO :
   if(!state.currncy[actions.kind]){
     return{
      ...state
     }
   }else if(state.currncy[actions.kind].amont < actions.amont || actions.amont <0){
     return{
       ...state
     }
   }else{
     return{
       ...state,
       currncy:{...state.currncy,[actions.kind]:new Currncy(actions.kind,state.currncy[actions.kind].amont - actions.amont)},
       totalAmont:state.totalAmont - actions.amont
     }
   }
   case GET_DATA:
   return{
     currncy:actions.data,
     totalAmont:actions.totalAmont
   }


}
  return state;
}
