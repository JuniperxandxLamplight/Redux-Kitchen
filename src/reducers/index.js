import { combineReducers } from 'redux';
import levelReducer from './levelReducer';

const rootReducer = combineReducers({
  userLevel: levelReducer
})

export default rootReducer;