import { combineReducers } from 'redux';
import commonReducer from '../common/store/reducer';
import bookReducer from '@/pages/book/store/reducer';

export default combineReducers({
  common: commonReducer,
  book: bookReducer,
})
