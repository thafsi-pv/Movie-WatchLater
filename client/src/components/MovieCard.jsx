import { GoPencil } from "react-icons/go";
import { BiTrashAlt } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import MovieStars from "./MovieStars";
import { Link } from "react-router-dom";
import axios from "axios";
import { MOVIE_API_URL } from "../constants/const";
import Tooltip from "./Tooltip";

const MovieCard = ({ data, setmovielist, movielist }) => {
  const { _id, movieName, genre, rating, imageName } = data;

  return (
    <div className="card card-side bg-base-100 shadow-xl sm:w-full lg:w-2/5">
      <figure className="lg:w-2/5">
        <img className="h-full" src={imageName} alt="Movie" />
      </figure>
      <div className="card-body space-y-1">
        <h2 className="card-title">{movieName}</h2>
        <div>
          <p className="text-xs text-slate-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
            voluptatibus?
          </p>
        </div>
        <div className=" flex gap-2 flex-wrap">
          {genre?.map((item) => (
            <div className="badge badge-outline text-xs" key={item._id}>
              {item.genre}
            </div>
          ))}
        </div>
        <div className="rating rating-sm">
          <MovieStars movieName={movieName} rating={rating} id={_id} />
        </div>
        <div>
          <Tooltip content="Watchlater">
            <span>
              <MdOutlineWatchLater className="h-5 w-5" />
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
