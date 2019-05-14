import constants from './../constants';

const { initialState, types } = constants;

const levelReducer = (state = initialState.userLevel, action) => {
  switch(action.type) {
    case types.LEVEL_UP:
      return {state: state + 1};
    default: 
      return state;
  }
}

export default levelReducer;