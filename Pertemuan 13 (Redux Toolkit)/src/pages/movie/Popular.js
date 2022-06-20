/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function PopularMovie() {
    const dispatch = useDispatch();

    useEffect(async() => {
        getPopularMovies();
    }, []);

    async function getPopularMovies(){
        // Fetch data menggunakan axios
        const response = await axios(ENDPOINTS.POPULAR);
        
        // Simpan data ke state
        dispatch(updateMovies(response.data.results));
    }


    return(
        <>
            <Hero typeMovie={0} />
            <Movies typeMovies={`Popular Movies`} />
        </>
    )
}

export default PopularMovie;