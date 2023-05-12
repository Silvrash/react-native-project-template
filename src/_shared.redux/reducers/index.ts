import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './countSlice';

const rootReducer = combineReducers({
	counter: counterReducer,
});

export default rootReducer;
