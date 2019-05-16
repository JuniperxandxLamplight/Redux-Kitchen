import constants from './../constants';

const { initialState, types, levelData } = constants;

const levelDataReducer = (state = levelData, action) => {
  switch(action.type) {
  default:
    return state;
  }
};

export default levelDataReducer;
