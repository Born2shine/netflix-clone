import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movies/movies-slice";
import slugSlice from "./slugs/slugs-slice";

const store = configureStore({
    reducer: {
        slug: slugSlice.reducer,
        movies: MovieSlice.reducer
    }
})

export default store