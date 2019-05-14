import constants from './../../src/constants';
import {createStore} from 'redux';
import * as actions from './../../src/actions';
import levelReducer from '../../src/reducers/levelReducer';
import rootReducer from '../../src/reducers';


describe('levelReducer', () => {
    const {initialState, types } = constants;
    const store = createStore(rootReducer, initialState);

  describe('levelReducer', () => {

    it("should accept and return initial state", () => {
      expect(levelReducer(initialState.userLevel, {type: null})).toEqual(1)
    });

    it("should increment userLevel up by one when level_up is called", () => {
      expect(levelReducer(initialState.userLevel, actions.levelUp() )).toEqual(2)
    });

  })
})