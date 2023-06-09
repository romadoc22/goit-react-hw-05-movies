

import { Ul } from './ListOfMovies.styled';

import ListOfMoviesItem from '../ListOfMoviesItem/ListOfMoviesItem';

const ListOfMovies = ({ trendingMovies }) => {
  return (
    <Ul>
      {trendingMovies.map(movie => (
        <ListOfMoviesItem key={movie.id} movie={movie} />
      ))}
    </Ul>
  );
};

// ListOfFilms.propTypes = {}

export default ListOfMovies;
