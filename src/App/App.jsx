import carsAPI from '../api/cars.json';
import Home from 'Pages/Home/Home';
import { useState, useEffect } from 'react';
import { Wrapper } from './App.styled';
import Loader from 'components/Loader';

export const App = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    if (!cars) {
      setCars(carsAPI);
    }
  }, [cars]);

  return <Wrapper>{!cars ? <Loader /> : <Home cars={cars} />}</Wrapper>;
};
