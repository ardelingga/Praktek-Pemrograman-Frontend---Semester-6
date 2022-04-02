// Membuat component hello
// COMPONENT
function Hello(props){
    // Diluar return adalah javascript biasa
    const nama = "Ardelingga";
    const age = 20;

    // Didalam return adalah jsx
    return(
        <div className="hello">
            <h2> Hello React </h2>
            <p> Saya {props.name}, {age} - {props.major} </p>
            {/* <button>Login</button> */}
        </div>
    );
}

export default Hello;