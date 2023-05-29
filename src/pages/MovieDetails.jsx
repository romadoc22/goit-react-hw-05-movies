// підключення React і хуків
import React from 'react';
import { useState, useEffect } from 'react';

// підключення useParams для отримання параметрів з адресного рядка
import { useParams, Outlet } from 'react-router-dom';

import { getMovieById } from '../utils/api';
import Loader from '../components/Loader/Loader';
import MovieCard from '../components/MovieCard/MovieCard';
import { Container } from 'components/App.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  // const [error, setError] = useState(null);
  const [showLoader, setShowLoader] = useState(false);

  // завантаження даних з сервера і встановдення стейтів
  useEffect(() => {
    setShowLoader(true);
    getMovieById(movieId)
      .then(data => {
        setMovieInfo(data);
      })
      .catch(e => {
        // setError(e.message);
      })
      .finally(() => {
        setShowLoader(false);
      });
  }, [movieId]);

  return (
    <>
      {showLoader && <Loader />}
      <section>
        <Container>
          {movieInfo && <MovieCard movieInfo={movieInfo} />}
          <Outlet />
        </Container>
      </section>
    </>
  );
};

export default MovieDetails;
