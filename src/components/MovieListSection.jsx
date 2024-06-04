export function MovieItem(prop) {
  const movie = prop.item;
  return (
    <div className="w-[400px] h-[250px] flex gap-[19px] bg-white mb-[80px] p-[20px] text-[#000000]">
      <img
        src={movie.image}
        alt={`${movie.title} image`}
        className="w-[102px] h-[100px] rounded-[10px]"
      />
      <div className="w-[231px] h-[211px]">
        <p>Title: {movie.title}</p>
        <p>Year: {movie.year}</p>
        <p>Runtime: {movie.runtime}</p>
        <p>
          Genres:{" "}
          {movie.genres.map((genresItem, genresIndex) => (
            <span
              key={genresIndex}
              className="w-[68px] h-[27px] rounded-[10px] bg-[#EAAC99]  text-[16px] leading-[18px] mr-[9px]"
            >
              {genresItem}
            </span>
          ))}
        </p>
        <p>IMDB Ratings: {movie.imdbRating}</p>
        <p>IMDB Votes: {movie.imdbVotes}</p>
      </div>
    </div>
  );
}
