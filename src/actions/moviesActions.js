import {  MOVIE_TOGGLE_FAVOURITE } from './types';

export const movieToggleFavourite = (index) => {
    return {
        type: MOVIE_TOGGLE_FAVOURITE,
        index:index
    }
}