import { useEffect, useState } from "react";
import Header from "../components/Header";
import { MOVIE_API_URL } from "../constants/const";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const [movieList, setMovieList] = useState([{}]);

  useEffect(() => {
    getMovieList();
  }, []);
  const getMovieList = async () => {
    const response = await axios(MOVIE_API_URL);
    setMovieList(response?.data);
  };

  return (
    <div className=" bg-gray-700 ">
      <div className="p-20 flex gap-5 flex-wrap justify-center">
        {movieList?.map((item) => (
          <MovieCard
            key={item._id}
            data={item}
            movielist={movieList}
            setmovielist={setMovieList}
            watchlater={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
