export function MovieItem(prop) {
  const movie = prop.item;
  return (
    <div className="w-[400px] h-[250px] flex text-[20px] rounded-[10px] gap-[19px] bg-[#FFFFFF] mb-[80px] p-[15px] pr-0 text-[#181818] shadow-[0_4px_40px_0_rgba(145,124,124,0.25)]">
      <img
        src={movie.image}
        alt={`${movie.title} image`}
        className="w-[102px] h-[100px] rounded-[10px] object-cover"
      />
      <div className="w-[231px] h-[211px] flex flex-col justify-between">
        <div className="flex">
          <p className="mr-[2px]">Title: </p>
          <p>{movie.title}</p>
        </div>
        <p>Year: {movie.year}</p>
        <p>Runtime: {movie.runtime}</p>
        <div className="flex">
          <p>Genres: </p>
          <div className="flex flex-wrap ml-[9px] gap-[3px]">
            {movie.genres.map((genresItem, genresIndex) => (
              <div
                key={genresIndex}
                className="h-[27px] px-[5px] py-[4.5px] rounded-[10px] bg-[#EAAC99] text-[16px] leading-[18px]"
              >
                <p>{genresItem}</p>
              </div>
            ))}
          </div>
        </div>

        <p>IMDB Ratings: {movie.imdbRating}</p>
        <p>IMDB Votes: {movie.imdbVotes}</p>
      </div>
    </div>
  );
}
