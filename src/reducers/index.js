import { combineReducers } from 'redux';
import levelReducer from './levelReducer';
import userStateReducer from './userStateReducer';

const rootReducer = combineReducers({
  userLevel: levelReducer,
  userState: userStateReducer,
});

export default rootReducer;