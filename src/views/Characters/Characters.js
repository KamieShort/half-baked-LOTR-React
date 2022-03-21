import React, { useState, useEffect } from 'react';
import DropDownRace from '../../components/DropDownRace/DropDownRace';

import { fetchCharacters } from '../../services/fetchcharacters';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [race, setRace] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedRace, setSelectedRace] = useState('All');

  useEffect(() => {
    const fetchData2 = async () => {
      const resp = await fetchCharacters(race, query);

      setCharacters(resp);
    };
    fetchData2();
  }, [race, query]);

  const filterRace = () => {
    return race.filter((rac) => rac.character === race || race === 'All');
  };
  return (
    <div>
      <h2>Characters</h2>
      <DropDownRace selectedRace={selectedRace} setSelectedRace={setSelectedRace} />
      {characters.map((character) => (
        <div key={character.id} {...character} setRace={setRace} setQuery={setQuery}>
          <p>{character.name}</p>
        </div>
      ))}
    </div>
  );
}
