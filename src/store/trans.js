import Transctio from '../store/trans';
import {ADD_TO_CRYPTO,REMOVE_TO_CRYPTO} from './actions'
const initialState = {
trans:[]
}

export default (state=initialState,actions) => {
  switch (actions.type) {
    case ADD_TO_CRYPTO:
    const ad = {kind:actions.kind,amont:actions.amont,case:'+',date:new Date().toString()}
    return{...state,
      trans:state.trans.concat(ad)
    }
    case REMOVE_TO_CRYPTO:
    const up = {case:"-",amont:actions.amont,agnast:actions.agnast,kind:actions.kind,date: new Date().toString()}
    return{...state,
      trans:state.trans.concat(up)
    }


  }
  return state;
}
