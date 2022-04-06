import React from 'react';
import './DropDownRace.css';

export default function DropDownRace({ setRace, race }) {
  const options = ['All', 'Dwarf', 'Elf', 'Hobbit', 'Human', 'Maiar', 'Orc'];
  return (
    <select value={race} onChange={(e) => setRace(e.target.value)}>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
      ;
    </select>
  );
}
