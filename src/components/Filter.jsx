function Filter({ filter, setSearchParams }) {
  return (
    <select
      value={filter}
      onChange={(e) =>
        setSearchParams((prev) => {
          prev.set('filter', e.target.value);
          return prev;
        })
      }
    >
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
