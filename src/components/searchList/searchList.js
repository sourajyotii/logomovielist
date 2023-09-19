import React, { useEffect, useState } from "react";
import "./searchList.css";
import { useParams } from "react-router-dom";
import Cards from "../card/card";

const SearchList = () => {
  const [movieList, setMovieList] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [query]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&query=${query}`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie__list">
      <h2 className="list__title">SEARCH RESULTS: {query.toUpperCase()}</h2>
      <div className="list__cards">
        {movieList.map((movie) => (
          <Cards movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
