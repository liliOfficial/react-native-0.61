import { MOVIE_TOGGLE_FAVOURITE } from '../actions/types';
import movies from '../asset/data/movies.json';

const INITIAL_STATE = { movies };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case MOVIE_TOGGLE_FAVOURITE:
            return Object.assign({}, state, {
                movies: state.movies.map((movie, index) => {
                    if (index === action.index) {
                        return Object.assign({}, movie, {
                            isFavourite: !movie.isFavourite
                        })
                    }
                    return movie
                })
            })
        default:
            return state;
    }
};