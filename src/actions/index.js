import * as types from '../constants/ActionTypes';




export const levelUp = () => ({
  type: types.LEVEL_UP,
});

export const dayToggle = () => ({
  type: types.DAY_TOGGLE,
});

export const nextCustomer = () => ({
  type: types.NEXT_CUSTOMER,
});

export const userStateChange = (userInput) => 
({
  type: userInput,
});