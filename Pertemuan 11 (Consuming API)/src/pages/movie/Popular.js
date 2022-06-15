/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

function PopularMovie() {
    // Simpan API_KEY dan URL ke variable
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    // Membuat state movies
    const [movies, setMovies] = useState([]);

    useEffect(async() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies(){
        // Fetch data menggunakan axios
        const response = await axios(URL);
        
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