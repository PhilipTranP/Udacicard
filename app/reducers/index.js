import { combineReducers } from 'redux';

import auth from './auth';
import decks from './deck';

export default combineReducers({
  auth,
  decks
});
