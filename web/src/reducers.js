import { combineReducers } from 'redux';
import homeReducer from './app/home/duck/reducers';

export default combineReducers({ productDetail: homeReducer });
