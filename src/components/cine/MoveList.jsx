import getAllMovies from "../../data/movies";
import MovieCard from "./MovieCard";

const MoveList = () => {
  const movies = getAllMovies();
  return (
    <>
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </>
  );
};

export default MoveList;
