/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import StyledDetailMovie from "./DetailMovie.styled";

function DetailMovie(){
    const params = useParams();
    const [movie, setMovie] = useState("");
    
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
    
    
    async function getDetailMovie(){
        // Fetch detail movie
        const response = await axios(ENDPOINTS.DETAIL(params.id));
        
        // Update data movie dari axios ke state movie
        setMovie(response.data);
    }

    useEffect(getDetailMovie, [params.id]);

    return(
        <StyledDetailMovie>
            <div className="poster">
                <img src={movie && `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </div>
            <div className="info">
                <h2>{movie.title}</h2>
                <h3>{`Genre : ${genres}`}</h3>
                <p>{movie.overview}</p>
                <Button as="a" href={idTrailer} target="_blank" variant="primary" md>Watch Movie</Button>
            </div>
        </StyledDetailMovie>
    )
}

export default DetailMovie;