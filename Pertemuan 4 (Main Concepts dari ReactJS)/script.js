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

// Membuat Element 
// ELEMENT
const judul = <h1>Hello react</h1>


/* 
    Membuat Component Header
    Menampilkan navigasi
*/
function Header(){
    return(
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}


/* 
    Membuat Component Main
    Menampilkan konten utama
*/
function Main(){
    // Mengirim props namanya: name
    return(
        <main>
            <Hello name="Ardelingga Pramesta Kusuma" major="Mobile Developer" identity={{
                name: "Ardelingga Pramesta Kusuma",
                major: "Mobile Developer"
            }}/>
            <Hello name="Fajar Dwi Saputra" major="Mobile Developer"/>
            <Hello name="Moh. Sodik Fikri" major="Web Developer"/>
            <Hello name="Rafif Mulya Reswara" major="Web Developer"/>
            <Hello name="Akira Oka" major="Fullstack Developer"/>
        </main>
    )
}

function Footer(){
    return(
        <footer>
            <h2>Copyright Ardelingga</h2>
            <p>Dibuat menggunakan react</p>
        </footer>
    )
}

/* 
    Membuat Component App
    Component utama yang menampung components lain
*/
function App(){
    return(
        <div>
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

// Render Document
ReactDOM.render(<App/>, document.getElementById("root"));
