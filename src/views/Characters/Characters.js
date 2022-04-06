import React, { useState, useEffect } from 'react';
import DropDownRace from '../../components/DropDownRace/DropDownRace';
import './Characters.css';

import { fetchCharacters } from '../../services/fetchcharacters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const query = '';
  // const [selectedRace, setSelectedRace] = useState('All');

  useEffect(() => {
    const fetchData2 = async () => {
      const resp = await fetchCharacters(race, query);

      setCharacters(resp);
    };
    fetchData2();
  }, [race, query]);

  return (
    <div className="characters">
      <h2>Characters</h2>
      <DropDownRace race={race} setRace={setRace} />
      {characters.map((character) => (
        <div key={character.id} {...character}>
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}
