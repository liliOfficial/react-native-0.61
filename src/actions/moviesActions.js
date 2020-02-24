import {  MOVIE_TOGGLE_FAVOURITE } from './types';

export const movieToggleFavourite = (id) => {
    return {
        type: MOVIE_TOGGLE_FAVOURITE,
        id:id
    }
}