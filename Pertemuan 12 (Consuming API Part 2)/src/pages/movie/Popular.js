/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
    // Membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(async() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies(){
        // Fetch data menggunakan axios
        const response = await axios(ENDPOINTS.POPULAR);
        
        // Simpan data ke state
        setMovies(response.data.results);
    }


    return(
        <>
            <Hero typeMovie={0} />
            <Movies movies={movies} typeMovies={`Popular Movies`} />
        </>
    )
}

export default PopularMovie;