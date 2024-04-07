import { useParams, useNavigate } from 'react-router-dom';
import BorderCountries from '../components/BorderCountries';

function CountryDetails({ countries }) {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const countryDetails = countries.find(
    (country) => country.cca3 === countryCode
  );
  const borderCodes = countryDetails?.borders;

  if (countryDetails)
    return (
      <div>
        <button onClick={() => navigate(-1)}>&#8592; Back</button>
        <img src={countryDetails.flags.png} />
        <div>
          <p>{countryDetails.name.common}</p>
          <p>
            Native Name:{' '}
            {Object.values(countryDetails.name.nativeName)[1]?.common ||
              Object.values(countryDetails.name.nativeName)[0].common}
          </p>
          <p>Population: {countryDetails.population}</p>
          <p>Region: {countryDetails.region}</p>
          <p>Sub Region: {countryDetails.subregion}</p>
          <p>Capital: {countryDetails.capital}</p>
        </div>
        <div>
          <p>Top Level Domain: {countryDetails.tld[0]}</p>
          <p>Currencies: {Object.values(countryDetails.currencies)[0].name}</p>
          <p>languages: {Object.values(countryDetails.languages)}</p>
        </div>
        {borderCodes && (
          <BorderCountries borderCodes={borderCodes} countries={countries} />
        )}
      </div>
    );
}

export default CountryDetails;
