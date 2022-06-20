/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {
    const dispatch = useDispatch();

    useEffect(async() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies(){
        // Fetch data menggunakan axios
        const response = await axios(ENDPOINTS.NOW_PLAYING);
        
        // Simpan data ke state
        dispatch(updateMovies(response.data.results));
    }


    return(
        <>
            <Hero typeMovie={1} />
            <Movies typeMovies={`Now Playing Movies`} />
        </>
    )
}

export default NowPlayingMovie;