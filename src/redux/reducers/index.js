/*
 * Contributors: Kunjan Gandhi
 * Purpose: reducers anchor file
 */

import { combineReducers } from 'redux';
import login from './loginReducer';


export default combineReducers({
  login,
});
