import constants from './../constants';

const { initialState, types } = constants;

const userStateReducer = (state = initialState.userState, action) => {
  switch(action.type) {
  default: 
    return state;
  }
};

export default userStateReducer;