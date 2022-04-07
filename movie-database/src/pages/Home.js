import { useState } from "react";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm.module";
import Footer from "../components/Footer/Footer.module";
import Hero from "../components/Hero/Hero.module";
import Movies from "../components/Movies/Movies.module";
import Navbar from "../components/Navbar/Navbar.module";
import data from "../components/utils/data";

function Main(){
  const [movies, setMovies] = useState(data); 

  return(
    <main>
        <Hero />
        <Movies movies={movies} setMovies={setMovies} />
        <AddMovieForm movies={movies} setMovies={setMovies} />
    </main>
  );
}

function Home() {
  return(
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;