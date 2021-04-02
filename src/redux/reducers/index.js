import { combineReducers } from 'redux';
import meals from './_meals';
import categories from './_categories';

export default combineReducers({
  meals,
  categories,
});
