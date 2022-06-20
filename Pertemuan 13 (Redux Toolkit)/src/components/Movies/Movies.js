import { useSelector } from "react-redux";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies(props) {
    //Membuat variable movies
    // const movies = data;

    const {typeMovies} = props;

    const movies = useSelector((store) => store.movies.movies); 

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{typeMovies}</h2>
        <div className={styles.movie__container}>
            {
                movies.map(function(movie) {
                    return <Movie key={movie.id} movie={movie} />;
                })
            }
        </div>
        {/* Membuat event onClick */}
      </section>
    </div>
  );
}

export default Movies;
