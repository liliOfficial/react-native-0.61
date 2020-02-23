import { combineReducers } from 'redux';

import ToastReducer from './toastReducer';

export default combineReducers({
    toast: ToastReducer,
})