/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import DetailMovie from "../../components/DetailMovie";
import Movies from "../../components/Movies/Movies";
import { updateMovies } from "../../features/moviesSlice";
import ENDPOINTS from "../../utils/constants/endpoint";

function Detail(){
    const params = useParams();
    const dispatch = useDispatch();


    useEffect(getRecommendationMovies, [params.id])

    async function getRecommendationMovies(){
        const response = await axios(ENDPOINTS.RECOMMENDATION(params.id));
        dispatch(updateMovies(response.data.results));
    }

    return(
        <>
            <DetailMovie/>
            <Movies typeMovies={`Recommendations`} />
        </>
    );
}

export default Detail;