import { useState } from "react";

function Counter(){
    // Cara 1
    let [hasil, setHasil] = useState(0);

    // Cara 2
    const hasilState = useState(0);
    const hasil2 = hasilState[0];
    const setHasil2 = hasilState[1];

    function tambahNilai(){
        setHasil(hasil+1)
    }

    return(
        <div>
            <p>Hasil : {hasil}</p>
            <button onClick={tambahNilai}>Add</button>
        </div>
    );
}

export default Counter;