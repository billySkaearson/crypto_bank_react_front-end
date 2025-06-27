import {LOG_IN,SING_UP} from './actions';
const initialState = {
  id:null,
  token:null,
  name:null,
  email:null,
  date:null
}

export default (state=initialState,actions) =>{
  switch (actions.type) {
    case LOG_IN:
    return{...state,
      name:actions.name,
      email:actions.email,
      token:actions.token,
      id:actions.id,
      date:actions.date
    }
    case SING_UP:
    return{...state,
      name:actions.name,
      email:actions.email,
      token:actions.token,
      id:actions.id,
      date:actions.date
    }

  }
  return state;
}
