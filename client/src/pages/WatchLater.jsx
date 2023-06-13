import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const WatchLater = () => {
  const [watchLater, setWatchLater] = useState([{}]);
  console.log("🚀 ~ file: WatchLater.jsx:8 ~ WatchLater ~ watchLater:", watchLater)

  useEffect(() => {
    getAllWatchLaterMovies();
  }, []);

  const getAllWatchLaterMovies = async () => {
    const movieDb = JSON.parse(localStorage.getItem("movieDb"));
    const data = await axios("http://localhost:3456/api/user/watchlist", {
      method: "GET",
      headers: { Authorization: movieDb.token },
    });
    setWatchLater(data?.data[0].movies);
  };

  return (
    <div>
      <div>
        <div className=" bg-white">
          <div className="p-20 flex gap-5 flex-wrap justify-center ">
            {watchLater.length != 0 ? (
              watchLater?.map((item) => (
                <MovieCard key={item._id} data={item} watchlater={false} />
              ))
            ) : (
              <div className="alert">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-info shrink-0 w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Not added any movies to watch later list</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
