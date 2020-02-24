import { MOVIES_FETCH, MOVIE_TOGGLE_FAVOURITE } from '../actions/types';
import movies from '../asset/data/movies.json';

const INITIAL_STATE = { movies };

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case MOVIES_FETCH:
            console.log('reducer',action.payload);
            return { movies:action.payload };
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