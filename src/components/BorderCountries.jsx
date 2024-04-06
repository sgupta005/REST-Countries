import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BASE_URL = 'https://restcountries.com/v3.1/alpha';

function BorderCountries({ borders }) {
  const navigate = useNavigate();
  const [borderNames, setBorderNames] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    async function getCountryNames() {
      setIsloading(true);
      const countryNames = await Promise.all(
        borders.map(async (code) => {
          const res = await fetch(`${BASE_URL}/${code}`);
          const data = await res.json();
          return data[0].name.common;
        })
      );
      setBorderNames(countryNames);
      setIsloading(false);
    }
    getCountryNames();
  }, [borders]);

  return (
    <div>
      <p>Border Countries:</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        borders.map((countryCode, index) => (
          <button
            key={index}
            className="block"
            onClick={() => navigate(`/${countryCode}`)}
          >
            {borderNames[index]}
          </button>
        ))
      )}
    </div>
  );
}

export default BorderCountries;
