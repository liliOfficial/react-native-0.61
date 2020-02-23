import { TOAST_MESSAGE } from '../actions/types';

const INITIAL_STATE = { toastMessage: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOAST_MESSAGE:
            return { ...state, toastMessage: action.payload };
        default:
            return state;
    }
}