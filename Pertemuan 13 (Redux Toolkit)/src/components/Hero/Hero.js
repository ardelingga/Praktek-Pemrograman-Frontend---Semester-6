/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react"
import ENDPOINTS from "../../utils/constants/endpoint";
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero(props){
    const {typeMovie} = props;

    // Membuat state movie
    const [movie, setMovie] = useState("");

     // Simpan API_KEY dan URL ke variable
    const genres = movie && movie.genres.map((genre) => genre.name).join(", ");
    const idTrailer = movie && `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`;
    
    async function getTrendingMovie(){
        const response = await axios(ENDPOINTS.TRENDING);
        return response.data.results[typeMovie];
    }

    useEffect(getTrendingMovie, []);

    async function getDetailMovie(){
        // Ambil 1 data trending movie, lalu ambil id-nya
        const trendingMovie = await getTrendingMovie();
        const id = trendingMovie.id;

        // Fetch detail movie
        const response = await axios(ENDPOINTS.DETAIL(id));
        
        // Update data movie dari axios ke state movie
        setMovie(response.data);
    }

    useEffect(getDetailMovie, []);


    


    return(
        <StyledHero>
            <section>
                <div class="hero_left">
                    <h2>{movie.title}</h2>
                    <h3>{`Genre : ${genres}`}</h3>
                    <p>{movie.overview}</p>
                    <Button as="a" href={idTrailer} target="_blank" variant="primary" md>Watch Movie</Button>
                </div>
                <div class="hero_right">
                    <img src={movie && `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt={movie.title} />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero