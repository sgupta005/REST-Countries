import { useNavigate } from 'react-router-dom';

function BorderCountries({ borderCodes, countries }) {
  const navigate = useNavigate();

  const borderNames = borderCodes.map(
    (code) => countries.find((country) => country.cca3 === code).name.common
  );
  return (
    <div>
      <p>Border Countries:</p>
      {borderCodes.map((countryCode, index) => (
        <button
          key={index}
          className="block"
          onClick={() => navigate(`/${countryCode}`)}
        >
          {borderNames[index]}
        </button>
      ))}
    </div>
  );
}

export default BorderCountries;
