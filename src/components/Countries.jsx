import CountryCard from './CountryCard';

function Countries({ countries }) {
  return (
    <div className="flex flex-wrap">
      {countries.map((country) => (
        <CountryCard country={country} key={country.name.official} />
      ))}
    </div>
  );
}

export default Countries;
