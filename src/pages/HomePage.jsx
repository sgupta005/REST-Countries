import Countries from '../components/Countries';
import Loader from '../components/Loader';
import Search from '../components/Search';
import Filter from '../components/Filter';
import { useSearchParams } from 'react-router-dom';

function HomePage({ countries, isLoading }) {
  const [searchParams, setSearchParams] = useSearchParams({
    search: '',
    filter: '',
  });
  const search = searchParams.get('search');
  const filter = searchParams.get('filter');

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
      <Search search={search} setSearchParams={setSearchParams} />
      <Filter filter={filter} setSearchParams={setSearchParams} />
      <Countries countries={filteredCountries} />
    </>
  );
}

export default HomePage;
