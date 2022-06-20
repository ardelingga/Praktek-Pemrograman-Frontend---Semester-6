import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";

// Buat store
const store = configureStore({
    reducer: {
        movies: moviesReducer,
    }
});

export default store;