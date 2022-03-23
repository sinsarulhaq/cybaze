import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Details from "./Details";
import Footer from "./Footer";

function Movies() {
  const url =
    "https://api.themoviedb.org/3/discover/movie?api_key=4354f6ae31f4b4ff46b7d97ba0343089&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&without_genres=28&with_watch_monetization_types=flatrate";
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      console.log(request);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  return (
    <Container>
      <Content>
        {movies.map((movie, index) => (
          <Details movie={movie} key={index} />
        ))}
      </Content>
      
    </Container>
  );
}

export default Movies;

const Container = styled.div`
margin-top: 10px;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
