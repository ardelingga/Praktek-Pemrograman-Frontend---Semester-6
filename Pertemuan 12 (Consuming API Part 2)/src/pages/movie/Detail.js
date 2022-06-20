/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail(){
    const [movies, setMovies] = useState([]);
    const params = useParams();


    useEffect(getRecommendationMovies, [params.id])

    async function getRecommendationMovies(){
        await ENDPOINTS.SET_ID_MOVIE(params.id);
        const response = await axios(ENDPOINTS.RECOMMENDATION());
        setMovies(response.data.results);
    }

    return(
        <>
            <DetailMovie/>
            <Movies movies={movies} typeMovies={`Recommendations`} />
        </>
    );
}

export default Detail;