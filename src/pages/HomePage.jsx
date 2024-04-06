import Countries from '../components/Countries';
import Loader from '../components/Loader';

function HomePage({ countries, isLoading }) {
  return isLoading ? <Loader /> : <Countries countries={countries} />;
}

export default HomePage;
