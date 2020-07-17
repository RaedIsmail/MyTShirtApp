import authReducer from './authReducer';
import designReducer from './designReducers';
import { combineReducers } from 'redux';

const mainRerducer = combineReducers({
    auth: authReducer,
    design: designReducer

})

export default mainRerducer;