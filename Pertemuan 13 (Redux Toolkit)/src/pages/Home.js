import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer"
import Hero from "../components/Hero/Hero"
import Movies from "../components/Movies/Movies"
import AddMovieForm from "../components/AddMovieForm/AddMovieForm"
import { useState } from "react"
import data from "../utils/constants/data"
import Counter from "../components/Counter"


function Home(){
    /**
     * Mengangkat stave movies: lifting state.
     * Dari Component Movies ke Component Home.
     * Agar bisa digunakan oleh Component yang lain.
   */

    return(
        <>
            <Hero typeMovie={0} />
            <Movies typeMovies={`List Movies`} />
        </>
    )

    // return(
    //     <Counter/>
    // )

}

export default Home;