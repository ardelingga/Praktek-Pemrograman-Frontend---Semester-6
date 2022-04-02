import styles from "./AddMovieForm.module.css"

function AddMovieForm(){
    return(
        <div className={styles.container}>
            <section className={styles.form}>
                <div className={styles.form__right}>
                    <div className={styles.form__container}></div>
                </div>
                <div className={styles.form__left}>
                    <h2 className={styles.form__title}>Add Movie</h2>
                    <p>Title</p>
                    <input className={styles.form__input} type="text" />
                    <br /><br />
                    <p>Year</p>
                    <input className={styles.form__input} type="text" />
                    <br /><br />
                    <button className={styles.form__button}>Submit</button>
                </div>
            </section>
        </div>
    )
}

export default AddMovieForm