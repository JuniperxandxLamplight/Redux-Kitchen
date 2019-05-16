import constants from './../constants';

const { initialState, types } = constants;

const customerCountReducer = (state = initialState.customerCount, action) => {
  switch(action.type) {
  case types.NEXT_CUSTOMER:
    return state + 1;
  case types.DAY_TOGGLE:
    state = 1;
    return state;
  default: 
    return state;
  }
};

export default customerCountReducer;