import { useState } from "react";
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Hero from "../../components/Hero/Hero";

function CreateMovie() {
    return(
        <>
            <Hero typeMovie={2}/>
            <AddMovieForm/>
        </>
    )
}

export default CreateMovie;