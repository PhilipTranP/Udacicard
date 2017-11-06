import {
  AUTH_SUCCESS,
  AUTH_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  token: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return state;
    case AUTH_FAIL:
      return state;
    default:
      return state;
  }
}
