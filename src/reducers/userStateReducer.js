import constants from './../constants';

const { initialState, types } = constants;

const userStateReducer = (state = initialState.userState, action) => {
  let newState;
  switch(action.type) {
    case 'COOK_WAFFLES': 
      newState = Object.assign({}, state)
      newState.servedFood.waffles = newState.servedFood.waffles + 1;
      return newState;
    case 'COOK_BISCUITS': 
      newState = Object.assign({}, state)
      newState.servedFood.biscuits = newState.servedFood.biscuits + 1;
      return newState;
  default: 
    return state;
  }
};

export default userStateReducer;