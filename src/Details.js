import React from "react";
import styled from "styled-components";

function Details({ movie }) {
  return (
    <Container>
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      />
      <Contents>
        <h3>{movie.title}</h3>
        <p>{movie.original_title}</p>
      </Contents>
    </Container>
  );
}

export default Details;

const Container = styled.div``;
const Image = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  padding: 5px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  h3 {
    margin-top: 1px;
    font-size: 20px;
  }
  p {
    margin-top: 1px;
    font-size: 15px;
  }
`;
