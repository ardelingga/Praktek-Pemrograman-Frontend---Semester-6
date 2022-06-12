import { nanoid } from "nanoid";
import { useState } from "react"
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css"

function AddMovieForm(props){
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [imagePoster, setImagePoster] = useState("");
    const [type, setType] = useState("");

    const {movies, setMovies} = props;

    // Membuat state:isTitleError, isDateError
    const [isTitleError, setIsTitleError] = useState(false);
    const [isDateError, setIsDateError] = useState(false);
    const [isImagePosterError, setIsImagePosterError] = useState(false);
    const [isTypeError, setIsTypeError] = useState(false);

    function handleTitle(e){
        setTitle(e.target.value);
    }
    
    function handleDate(e){
        setDate(e.target.value)
    }

    function handleImagePoster(e){
        setImagePoster(e.target.value)
    }
    
    function handleType(e){
        setType(e.target.value)
    }

    function handleSubmit(e){
        // Cegah form agar tidak direfresh
        e.preventDefault();

        if(title === ""){
            setIsTitleError(true)
            return
        }else if(date === ""){
            setIsDateError(true)
        }else{
            setIsTitleError(false)
            setIsDateError(false)
            const movie = {
                id: nanoid(),
                title: title,
                year: date,
                type: type,
                poster: imagePoster
                // poster: "https://picsum.photos/300/400"
            }
            
            setMovies([...movies, movie]);
            console.log(movie);

            setTitle("")
            setDate("")
        }
    }

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__right}>
                    <div className={styles.form__container}></div>
                </div>
                <div className={styles.form__left}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <p>Title</p>
                        <input id="title" value={title} onChange={handleTitle} className={styles.form__input} type="text" />
                        {isTitleError ? <Alert>Title Wajib Diisi</Alert> : ""}
                        {isTitleError && <Alert>Title2 Wajib Diisi</Alert> }
                        <br /><br />
                        <p>Year</p>
                        <input id="date" value={date} onChange={handleDate} className={styles.form__input} type="number" />
                        {isDateError ? <Alert>Date Wajib Diisi</Alert> : ""}
                        {isDateError && <Alert> Date Wajib Diisi </Alert>}
                        <br /><br />
                        <p>Image poster</p>
                        <input id="imagePoster" value={imagePoster} onChange={handleImagePoster} className={styles.form__input} type="text" />
                        {isImagePosterError ? <Alert>Image Poster Wajib Diisi</Alert> : ""}
                        {isImagePosterError && <Alert> Image Poster Wajib Diisi </Alert>}
                        <br /><br />
                        <p>Type</p>
                        <select name="cars" id="cars" className={styles.form__input} onChange={handleType}>
                            <option disabled>Select Option</option>
                            <option value="action">Action</option>
                            <option value="drama">Drama</option>
                            <option value="horor">Horor</option>
                        </select>
                        {isTypeError ? <Alert>Type Wajib Diisi</Alert> : ""}
                        {isTypeError && <Alert> Type Wajib Diisi </Alert>}
                        <br /><br />
                        <button className={styles.form__button}>Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm