import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";

const WatchLater = () => {
  const [watchLater, setWatchLater] = useState();

  useEffect(() => {
    getAllWatchLaterMovies();
  }, []);

  const getAllWatchLaterMovies = async () => {
    const token = localStorage.getItem("token");
    const data = await axios("http://localhost:5111/api/user/watchlist", {
      method: "GET",
      headers: { Authorization: token },
    });
    console.log("🚀 ~ file: WatchLater.jsx:18 ~ getAllWatchLaterMovies ~ data:", data)
  };

  return (
    <div>
      <div>wathc later</div>
    </div>
  );
};

export default WatchLater;
