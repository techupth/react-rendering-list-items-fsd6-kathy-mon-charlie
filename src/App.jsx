import "./App.css";
import { MovieItem } from "./components/MovieListSection";
import movies from "./data/movies";

function App() {
  return (
    <div className="App bg-[#E0EAFF] font-[kanit]">
      <section className="movie-list-section flex flex-col items-center">
        {/* Render Movie Lists Here */}
        <h1 className="text-black">Movie List Section</h1>
        {movies.map((item, key) => (
          <MovieItem item={item} key={key} />
        ))}
      </section>
    </div>
  );
}

export default App;
