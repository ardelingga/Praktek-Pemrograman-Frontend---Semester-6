import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Movies from "./components/Movies/Movies"
import AddMovieForm from "./components/AddMovieForm/AddMovieForm"
import Counter from "./components/Counter/Counter"

function App() {
  return (
    <div>
      {/* <Counter/> */}
      <Navbar/>
      <Hero/>
      <Movies/>
      <AddMovieForm/>
      <Footer/>
    </div>
  );
}

export default App;
