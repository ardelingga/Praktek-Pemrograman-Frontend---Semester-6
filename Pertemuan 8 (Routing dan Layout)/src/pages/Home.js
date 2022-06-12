import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import AddMovieForm from "../components/AddMovieForm/AddMovieForm"
import { useState } from "react"
import data from "../utils/constants/data"


function Home(){
    /**
     * Mengangkat stave movies: lifting state.
     * Dari Component Movies ke Component Home.
     * Agar bisa digunakan oleh Component yang lain.
   */
    
    // Membuat state movies
    const [movies, setMovies] = useState(data);

    return(
        <>
            <Hero />
            <Movies movies={movies} setMovies={setMovies} />
            <AddMovieForm movies={movies} setMovies={setMovies} />
        </>
    )

}

export default Home;