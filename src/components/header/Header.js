import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    query === ""
      ? navigate(`/`)
      : navigate(`/search/${query.replace(" ", "-")}`);
  }, [query]);

  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>MovieTracker</h1>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
      </div>
      <div className="headerRight">
        <input
          className="search"
          placeholder="Type to search..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Header;
