import { useEffect } from "react";
import { useState } from "react";

function Counter(){
    // useState
    // useState mengembalikan sepasang value (array): [0, function()]
    const [angka, setAngka] = useState(0);

    function addAngka(){

        setAngka(angka+1);
        console.log(angka);
    }


    // useEffect
    // useEffect ini dijalankan pada lifecycle mount dan update.
    function updateDOM(){
        console.log("Lifecycle: Dimount");

        // Melakukan side effect: mengakses DOM
        // Mengubah title document setiap state berubah
        document.title = `Hasil: ${angka}`
    }
    useEffect(updateDOM, [angka])

    console.log("Lifecycle: Dirender");
    
    return(
        <div>
            <p>Hasil : {angka}</p>
            <button onClick={addAngka}>Add</button>
        </div>
    );
}

export default Counter;