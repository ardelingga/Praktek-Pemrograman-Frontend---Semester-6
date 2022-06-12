import { useEffect, useState } from "react"
import Button from "../ui/Button";
import StyledHero from "./Hero.styled";

function Hero(){
    // Membuat state movie
    const [movie, setMovie] = useState("");

    // eslint-disable-next-line react-hooks/exhaustive-deps
    async function fetcMovie(){
        // Melakukan side effect : fetch data movie (api);
        const response = await fetch("https://www.omdbapi.com?apikey=fcf50ae6&i=tt2975590");
        const data = await response.json()
        
        // Set movie dengan data hasil fetch itu
        setMovie(data)
    }
    
    useEffect(fetcMovie, []);

    console.log(movie);

    return(
        <StyledHero>
            <section>
                <div class="hero_left">
                    <h2>{movie.Title}</h2>
                    <h3>{movie.Genre}</h3>
                    <p>{movie.Plot}</p>
                    <Button variant="primary" sm>Watch Movie</Button>
                </div>
                <div class="hero_right">
                    <img src={movie.Poster} alt={movie.Title} />
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero