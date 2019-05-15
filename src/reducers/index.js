import { combineReducers } from 'redux';
import levelReducer from './levelReducer';
import userStateReducer from './userStateReducer';
import dayToggleReducer from './dayToggleReducer';
import customerCountReducer from './customerCountReducer';

const rootReducer = combineReducers({
  userLevel: levelReducer,
  userState: userStateReducer,
  dayTime: dayToggleReducer,
  customerCount: customerCountReducer,
});

export default rootReducer;