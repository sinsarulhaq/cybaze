import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Banner.css";

function Banner() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=4354f6ae31f4b4ff46b7d97ba0343089&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=28&with_watch_monetization_types=flatrate";
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      //   console.log(request)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="container">
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner__content">
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}{" "}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My List</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 190)}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </div>
  );
}

export default Banner;
