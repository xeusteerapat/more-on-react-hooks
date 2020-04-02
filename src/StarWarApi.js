// implementation of useEffect by using Starwar API
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Movie = () => {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState('');

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      setMovie(response.data);
    };
    getData();
  }, [number]); // this mean only run when number is changed

  return (
    <div>
      <h1>Pick a movie</h1>
      <h4>{movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
};

export default Movie;
