import React, { useState, useEffect } from 'react';

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
    <div>
      <h2>Films</h2>
      {films.map((film) => (
        <p key={film.id}>{film.title}</p>
      ))}
    </div>
  );
}
