import Countries from '../components/Countries';
import Loader from '../components/Loader';
import Search from '../components/Search';
import Filter from '../components/Filter';
import { useState } from 'react';

function HomePage({ countries, isLoading }) {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');

  countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  let filteredCountries = filter
    ? countries.filter((country) => country.region == filter)
    : countries;
  filteredCountries = search
    ? filteredCountries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    : filteredCountries;
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={filteredCountries} />
    </>
  );
}

export default HomePage;
