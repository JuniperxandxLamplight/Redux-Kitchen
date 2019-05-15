import constants from './../constants';

const { initialState, types } = constants;

const dayToggleReducer = (state = initialState.dayTime, action) => {
  switch(action.type) {
  case types.DAY_TOGGLE: 
    return !state;
  default: 
    return state;
  }
};

export default dayToggleReducer;