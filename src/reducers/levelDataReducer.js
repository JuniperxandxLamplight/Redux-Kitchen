import constants from './../constants';

const { initialState, types } = constants;

const levelDataReducer = (state = initialState.levelData, action) => {
  switch(action.type) {
  default: 
    return state;
  }
};

export default levelDataReducer;