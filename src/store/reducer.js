import { combineReducers } from 'redux';
import commonReducer from '../common/store/reducer';

export default combineReducers({
  common: commonReducer
})
