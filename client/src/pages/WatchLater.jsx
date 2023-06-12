import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import MovieCard from "../components/MovieCard";

const WatchLater = () => {
  const [watchLater, setWatchLater] = useState();

  useEffect(() => {
    getAllWatchLaterMovies();
  }, []);

  const getAllWatchLaterMovies = async () => {
    const token = localStorage.getItem("token");
    const data = await axios("http://localhost:3456/api/user/watchlist", {
      method: "GET",
      headers: { Authorization: token },
    });
    setWatchLater(data?.data[0].movies);
  };

  return (
    <div>
      <div>
        <div className=" bg-gray-700 ">
          <div className="p-20 flex gap-5 flex-wrap justify-center">
            {watchLater?.map((item) => (
              <MovieCard key={item._id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
