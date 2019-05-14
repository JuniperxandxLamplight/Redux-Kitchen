import constants from './../../src/constants';
import * as actions from './../../src/actions';
import levelReducer from '../../src/reducers/levelReducer';
import rootReducer from '../../src/reducers';


describe('levelReducer', () => {
    const {initialState, types } = constants;
    const store = createStore(rootReducer, initialState);

  describe('levelReducer', () => {

    it("should accept and return initial state", () => {
      expect(levelReducer(initialState.userLevel, {type: null}).toEqual() )
    })

  })
})