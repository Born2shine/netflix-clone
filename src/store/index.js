import { configureStore } from "@reduxjs/toolkit";
import slugSlice from "./slugs-slice";

const store = configureStore({
    reducer: {
        slug: slugSlice.reducer
    }
})

export default store