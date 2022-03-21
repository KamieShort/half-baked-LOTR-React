import './DropDownRace.css';

export default function DropDownRace({ setRace, filterRace }) {
  const options = ['All', 'Dwarf', 'Elf', 'Hobbit', 'Human', 'Maiar', 'Orc'];
  return (
    <select onChange={(e) => filterRace(e.target.value)}>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
      ;
    </select>
  );
}
