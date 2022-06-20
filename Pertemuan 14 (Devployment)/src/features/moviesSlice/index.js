import { createSlice } from "@reduxjs/toolkit";
import data from "../../utils/constants/data";

// Buat slice
const moviesSlice = createSlice({
    name: "Movies Slice",
    initialState: {
        movies: data
    },
    reducers: {
        addMovie(state, action){
            // add movie to movies
            state.movies.push(action.payload);
        },
        updateMovies(state, action){
            state.movies = action.payload;
        },
        deleteMovie(){}
    }
});

// Generate action & reducer
const moviesReducer = moviesSlice.reducer;
const {addMovie, updateMovies, deleteMovie} = moviesSlice.actions;

export default moviesReducer;
export {
    addMovie,
    updateMovies,
    deleteMovie
};