import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
    name: 'movies',
    initialState: {
        genre:[],
        singleMovie: null
    },
    reducers: {
        getMovies(state, action){
            state.genre.push(action.payload)
        },
        getSingleMovie(state, action){
            state.singleMovie = action.payload.movie
        }
    }

})

export const MovieActions = MovieSlice.actions
export default MovieSlice