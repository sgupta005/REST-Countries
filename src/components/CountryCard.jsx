import { useNavigate } from 'react-router-dom';

function CountryCard({ country }) {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`${country.cca3}`)}>
      <img src={country.flags.png} className="w-[300px] h-[175px]" />
      <div>
        <p>{country.name.common}</p>
        <p>Population: {country.population}</p>
        <p>Region: {country.region}</p>
        <p>Capital: {country.capital}</p>
      </div>
    </div>
  );
}

export default CountryCard;
