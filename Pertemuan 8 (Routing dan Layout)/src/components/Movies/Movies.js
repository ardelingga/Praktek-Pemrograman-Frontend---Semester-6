import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
import { nanoid } from "nanoid";

function Movies(props) {
    //Membuat variable movies
    // const movies = data;

    const {movies, setMovies} = props;

    //Membuat fungsi untuk handle click
    function handleClick(){
        const movie = {
            id: nanoid(),
            title: "Spiral Jigsaw",
            year: 2021,
            type: "Movie",
            poster: "http://picsum.photos/300/400"
        }
        
        // Menjalankan fungsi setMovies
        // Menambahkan movie kedalam movies

        // spread operator : copy data array
        setMovies([...movies, movie]);
        console.log(movies);
    }

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>Latest Movies</h2>
        <div className={styles.movie__container}>
            {
                movies.map(function(movie) {
                    return <Movie key={movie.id} movie={movie} />;
                })
            }
        </div>
        {/* Membuat event onClick */}
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
