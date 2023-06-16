import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from "react-select";
import MovieStars from "./MovieStars";

function FilterMovie() {
  const [genreList, setGenreList] = useState([{}]);
  const [selectedGenres, setSelectedGenred] = useState([]);
  useEffect(() => {
    getAllGenre();
  }, []);

  const getAllGenre = async () => {
    const data = await axios("http://localhost:3456/api/genre");
    const genreList = data?.data;
    const updatedGenre = genreList.map(({ genre, _id }) => ({
      value: _id,
      label: genre,
    }));
    setGenreList(updatedGenre);
  };

  const handleGenreChanges = (selectedOptions) => {
    setSelectedGenred(selectedOptions);
  };

  return (
    <div className="flex justify-center">
      <div className=" p-3 ">
        <label htmlFor="" className="label text-sm">
          Genre
        </label>
        <Select
          defaultValue={[genreList[2], genreList[1]]}
          isMulti
          name="colors"
          options={genreList}
          value={selectedGenres}
          onChange={handleGenreChanges}
          className="basic-multi-select "
          classNamePrefix="select"
        />
      </div>
      <div className=" p-3">
        <label htmlFor="" className="label text-sm">
          Rating
        </label>
        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
      {/* <div>
        <label htmlFor="" className="label text-sm">
          Genre
        </label>
        <button className="btn btn-primary">Filter List</button>
      </div> */}
    </div>
  );
}

export default FilterMovie;
