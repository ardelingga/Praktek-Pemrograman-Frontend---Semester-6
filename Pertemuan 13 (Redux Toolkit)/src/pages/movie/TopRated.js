/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
    const dispatch = useDispatch();

    useEffect(async() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies(){
        // Fetch data menggunakan axios
        const response = await axios(ENDPOINTS.TOP_RATED);
        
        // Simpan data ke state
        dispatch(updateMovies(response.data.results));
    }


    return(
        <>
            <Hero typeMovie={2} />
            <Movies typeMovies={`Top Rated Movies`} />
        </>
    )
}

export default TopRatedMovie;