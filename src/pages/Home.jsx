import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import ListOfMovies from '../components/ListOfMovies/ListOfMovies';
import { Container } from 'components/App.styled';
import Title from '../components/Title/Title';

// підключення функції отримання трендових фільмів із api
import { getTrendiingMovies } from '../utils/api';

const Home = () => {
  // стейти
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // вмикаємо лоадер
    setShowLoader(true);

    //отримуємо фільми, записуємо в стейт, ловимо помилки, на фінал знімаємо лоадер
    getTrendiingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      // .catch(e => {
      // setError(e.message);
      // toast.error(e.message);
      // console.log('error', error);
      // })
      .finally(() => {
        setShowLoader(false);
      });
  }, []);

  // Верстка сторінки
  return (
    <>
      {showLoader && <Loader />}
      {/* <ToastContainer /> */}
      <section>
        <Container>
          <Title text="Trending today" />
          <ListOfMovies trendingMovies={trendingMovies} />
        </Container>
      </section>
    </>
  );
};

export default Home;
