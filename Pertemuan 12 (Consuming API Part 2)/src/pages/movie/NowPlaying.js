/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function NowPlayingMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(async() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies(){
        // Fetch data menggunakan axios
        const response = await axios(ENDPOINTS.NOW_PLAYING);
        
        // Simpan data ke state
        setMovies(response.data.results);
    }


    return(
        <>
            <Hero typeMovie={1} />
            <Movies movies={movies} typeMovies={`Now Playing Movies`} />
        </>
    )
}

export default NowPlayingMovie;