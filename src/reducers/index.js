import { combineReducers } from 'redux';

import ToastReducer from './toastReducer';
import MovieRaducer from './movieReducer';

export default combineReducers({
    toast: ToastReducer,
    movie: MovieRaducer,
})