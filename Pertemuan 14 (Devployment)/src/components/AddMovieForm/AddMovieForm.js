import { nanoid } from "nanoid";
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMovie } from "../../features/moviesSlice";
import Alert from "../Alert/Alert";
import Button from "../ui/Button";
import styles from "./AddMovieForm.module.css"

function AddMovieForm(){

    // Buat dispatch
    const dispatch = useDispatch();

    // Buat navigation
    const navigation = useNavigate();

    //Membuat state dalam  bentuk object
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        imagePoster: "",
        type: "",
    });

    // Membuat fungsi handleChange untuk handle semua input form
    function handleCange(e){
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    // Membuat state isDataError dalam  bentuk object
    const [isDataError, setIsDataError] = useState({
        isTitleError: false,
        isDateError: false,
        isImagePosterError: false,
        isTypeError: false,
    });
    
    const {title, date, imagePoster, type} = formData;

    const {isTitleError, isDateError, isImagePosterError, isTypeError} = isDataError;

    function setDataError(key, value){
        setIsDataError({
            ...isDataError,
            [key]: value,
        })
    }

    function validate(){
        if(title === ""){
            setDataError("isTitleError", true);
            return false;
        }else if(date === ""){
            setDataError("isDateError", true);
            return false;
        }else if(imagePoster === ""){
            setDataError("isImagePosterError", true);
            return false;
        }else{
            setDataError("isTitleError", false);
            setDataError("isDateError", false);
            setDataError("isImagePosterError", false);
            return true;
        }
    }

    function submitMovie(){
        const movie = {
            id: nanoid(),
            title: title,
            year: date,
            type: type,
            poster: imagePoster
            // poster: "https://picsum.photos/300/400"
        }
        
        dispatch(addMovie(movie))
        navigation("/");
    }

    function resetForm(){
        // setTitle("")
        //     setDate("")
    }

    function handleSubmit(e){
        // Cegah form agar tidak direfresh
        e.preventDefault();
        validate() && submitMovie() && resetForm();
    }

    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__right}>
                    <img src="http://picsum.photos/600/400" alt="" />
                </div>
                <div className={styles.form__left}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <form onSubmit={handleSubmit}>
                        <p>Title</p>
                        <input id="title" name="title" value={title} onChange={handleCange} className={styles.form__input} type="text" />
                        {isTitleError ? <Alert>Title Wajib Diisi</Alert> : ""}
                        {/* {isTitleError && <Alert>Title2 Wajib Diisi</Alert> } */}
                        <br /><br />
                        <p>Year</p>
                        <input id="date" name="date" value={date} onChange={handleCange} className={styles.form__input} type="number" />
                        {isDateError ? <Alert>Date Wajib Diisi</Alert> : ""}
                        {/* {isDateError && <Alert> Date Wajib Diisi </Alert>} */}
                        <br /><br />
                        <p>Image poster</p>
                        <input id="imagePoster" name="imagePoster" value={imagePoster} onChange={handleCange} className={styles.form__input} type="text" />
                        {isImagePosterError ? <Alert>Image Poster Wajib Diisi</Alert> : ""}
                        {/* {isImagePosterError && <Alert> Image Poster Wajib Diisi </Alert>} */}
                        <br /><br />
                        <p>Type</p>
                        <select name="type" id="type" className={styles.form__input} onChange={handleCange}>
                            <option disabled>Select Option</option>
                            <option value="action">Action</option>
                            <option value="drama">Drama</option>
                            <option value="horor">Horor</option>
                        </select>
                        {isTypeError ? <Alert>Type Wajib Diisi</Alert> : ""}
                        {/* {isTypeError && <Alert> Type Wajib Diisi </Alert>} */}
                        <br /><br />
                        <Button variant="secondary" full lg>Submit</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm