import React from 'react';



export default function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      {
        movies.map((movie, i) => <div className='movie' key={movie.name + movie.id + i}>
          <h2>{movie.name}</h2>
          <p>List of actors</p>
          <ul>{movie.actors.map((actors, i) => <li key={actors + i}> {actors}</li>)}</ul>
          <p>Year Released:{movie.year}</p>
          <p>Director:{movie.director}</p>
        </div>)
      }
    </div>
  );
}
