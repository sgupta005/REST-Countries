import { useParams, useNavigate } from 'react-router-dom';
import BorderCountries from '../components/BorderCountries';

function CountryDetails({ countries }) {
  const { countryCode } = useParams();
  const navigate = useNavigate();

  const countryDetails = countries.find(
    (country) => country.cca3 === countryCode
  );
  const borders = countryDetails?.borders;

  // if (isLoading) return <p>Loading...</p>;
  if (countryDetails)
    return (
      <div>
        <button onClick={() => navigate(-1)}>&#8592; Back</button>
        <img src={countryDetails.flags.png} />
        <div>
          <p>{countryDetails.name.common}</p>
          <p>Native Name</p>
          <p>Population</p>
          <p>Region</p>
          <p>Sub Region</p>
          <p>Capital</p>
        </div>
        <div>
          <p>Top Level Domain</p>
          <p>Currencies</p>
          <p>languages</p>
        </div>
        {borders && <BorderCountries borders={borders} />}
      </div>
    );
}

export default CountryDetails;
