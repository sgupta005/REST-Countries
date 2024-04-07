function Filter({ filter, setFilter }) {
  return (
    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
      <option value="">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Filter;
