import { TOAST_MESSAGE } from './types';

export const toastPopup = (message) => {
    return {
        type: TOAST_MESSAGE,
        payload: message
    }
}