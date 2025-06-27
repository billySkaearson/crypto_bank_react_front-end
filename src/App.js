import './App.css';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import {Provider} from 'react-redux';
import userReduse from './store/userReduse'
import accountReduse from './store/accountReduse'
import transReduse from './store/trans'
import Navigation from './nav/navigator'

const App = () => {
const root = combineReducers({
  Users:userReduse,
  Account:accountReduse,
  Trans:transReduse
});
const Store = createStore(root,applyMiddleware(ReduxThunk));
  return (
<Provider store={Store}>
<Navigation />
</Provider>

  );
}

export default App;
