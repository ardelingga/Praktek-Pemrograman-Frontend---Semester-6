import { Link } from "react-router-dom"
import StyledMovie from "./Movie.styled"

function Movie(props) {
    //Destructing object
    const {movie} = props

    return (
        <StyledMovie>
            <Link to={`/movie/${movie.id}`}>
                <div>
                    <img
                        src={movie.poster || `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt=""
                    />
                    <h3>{movie.title}</h3>
                    <p>{movie.year || movie.release_date}</p>
                </div>
            </Link>
        </StyledMovie>
    )
}

export default Movie
