import React, { useState, useEffect } from 'react';

import { fetchCharacters } from '../../services/fetchcharacters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    
    };
    fetchData();
  }, []);
  return (
    <div>
      <h2>Characters</h2>
      {characters.map((character) => (
        <p key={character.id}>{character.name}</p>
      ))}
    </div>
  );
}
