import constants from './../../src/constants';
import {createStore} from 'redux';
import * as actions from './../../src/actions';
import levelReducer from '../../src/reducers/levelReducer';
import dayToggleReducer from '../../src/reducers/dayToggleReducer';
import userStateReducer from '../../src/reducers/userStateReducer';
import rootReducer from '../../src/reducers';


describe('reducers', () => {
    const {initialState, types } = constants;
    const store = createStore(rootReducer, initialState);

  describe('levelReducer', () => {

    it("should accept and return initial state", () => {
      expect(levelReducer(initialState.userLevel, {type: null})).toEqual(1)
    });

    it("should increment userLevel up by one when level_up is called", () => {
      expect(levelReducer(initialState.userLevel, actions.levelUp() )).toEqual(2)
    });

  });

  describe('dayToggleReducer', () => {

    it("should accept and return initial state", () => {
      expect(dayToggleReducer(initialState.dayTime, {type: null})).toEqual(true)
    });

    it("should toggle dayTime between true and false: false this time", () => {
      expect(dayToggleReducer(initialState.dayTime, actions.dayToggle())).toEqual(false)
    });

  });


  describe('rootReducer', () => {
    it('Should accept and return initial state.', () => {
      expect(rootReducer(initialState, { type: null })).toEqual(initialState);
    });

    it('Should contain logic from both reducers.', () => {
      expect(store.getState().userLevel).toEqual(levelReducer(undefined, { type: null }));
      expect(store.getState().userState).toEqual(userStateReducer(undefined, { type: null }));
      expect(store.getState().dayTime).toEqual(dayToggleReducer(undefined, { type: null }));
    });
  });

});

