import React, { useState, useEffect } from 'react';
import './Films.css';

import { fetchFilms } from '../../services/fetchfilms';

export default function Films() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchData3 = async () => {
      const data = await fetchFilms();
      console.log(data);
      setFilms(data);
    };
    fetchData3();
  }, []);

  return (
    <div className="films">
      <h2>Films</h2>
      {films.map((film) => (
        <p key={film.id}>{film.title}</p>
      ))}
    </div>
  );
}
