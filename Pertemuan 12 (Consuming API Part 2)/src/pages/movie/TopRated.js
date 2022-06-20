/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function TopRatedMovie() {
    const [movies, setMovies] = useState([]);

    useEffect(async() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies(){
        // Fetch data menggunakan axios
        const response = await axios(ENDPOINTS.TOP_RATED);
        
        // Simpan data ke state
        setMovies(response.data.results);
    }


    return(
        <>
            <Hero typeMovie={2} />
            <Movies movies={movies} typeMovies={`Top Rated Movies`} />
        </>
    )
}

export default TopRatedMovie;