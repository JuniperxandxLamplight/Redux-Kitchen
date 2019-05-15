import { combineReducers } from 'redux';
import levelReducer from './levelReducer';
import userStateReducer from './userStateReducer';
import dayToggleReducer from './dayToggleReducer';
import levelDataReducer from './levelDataReducer';

const rootReducer = combineReducers({
  userLevel: levelReducer,
  userState: userStateReducer,
  dayTime: dayToggleReducer,
  levelData: levelDataReducer,
});

export default rootReducer;