import { combineReducers } from 'redux';
import levelReducer from './levelReducer';
import userStateReducer from './userStateReducer';
import dayToggleReducer from './dayToggleReducer';

const rootReducer = combineReducers({
  userLevel: levelReducer,
  userState: userStateReducer,
  dayTime: dayToggleReducer,
});

export default rootReducer;