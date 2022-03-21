import React, { useState, useEffect } from 'react';

import { fetchCharacters } from '../../services/fetchcharacters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData2 = async () => {
      const resp = await fetchCharacters(race, query);
      console.log(resp);
      setCharacters(resp);
    };
    fetchData2();
  }, [race, query]);
  return (
    <div>
      <h2>Characters</h2>
      {characters.map((character) => (
        <div key={character.id} {...character}>
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}
