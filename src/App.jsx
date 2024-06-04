import "./App.css";
import { MovieItem } from "./components/MovieListSection";
import movies from "./data/movies";
import teams from "./data/teams";

function App() {
  return (
    <div className="App bg-[#E0EAFF] font-[kanit] mb-[20px]">
      <section className="movie-list-section flex flex-col items-center">
        {/* Render Movie Lists Here */}
        <h1 className="text-[#000000] text-[40px] leading-[18px] mt-[69px] mb-[80px]">
          Movie List Section
        </h1>
        <div className="flex justify-center items-center gap-[40px] flex-wrap">
          {movies.map((item, key) => (
            <MovieItem item={item} key={key} />
          ))}
        </div>
      </section>
      <section className="team-list-section flex flex-col items-center">
        <h1 className="text-[#000000] text-[40px] leading-[18px] mt-[69px] mb-[80px]">
          Team List Section
        </h1>
      </section>
    </div>
  );
}

export default App;
