import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { useEffect } from 'react';
import { useState } from 'react';
import CountryDetails from './pages/CountryDetails';

const BASE_URL = 'https://restcountries.com/v3.1';

function App() {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCountries() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/all`);
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        alert('There was some error loading data...');
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={<HomePage countries={countries} isLoading={isLoading} />}
        />
        <Route
          path="/:countryCode"
          element={
            <CountryDetails countries={countries} isLoading={isLoading} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
