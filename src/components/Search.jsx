function Search({ search, setSearchParams }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={search}
        onChange={(e) =>
          setSearchParams((prev) => {
            prev.set('search', e.target.value);
            return prev;
          })
        }
      />
    </div>
  );
}

export default Search;
