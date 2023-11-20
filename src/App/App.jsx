import carsAPI from '../api/cars.json';
import Home from 'Pages/Home/Home';
import { useState, useEffect } from 'react';
import useFetch from 'use-http';

import { Wrapper } from './App.styled';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

export const App = () => {
  const [cars, setCars] = useState(null);
  const [activeImg, setActiveImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line
  const { loading, error, jobs } = useFetch();

  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    if (loading) {
      setIsLoading(false);
    }

    if (!loading) {
      setTimeout(() => {
        setIsLoading(true);
      }, 1000);
    }
    if (!cars) {
      setCars(carsAPI);
    }
  }, [cars, loading, isLoading]);

  const toggleModal = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  const onClick = (e, showBridge) => {
    setActiveImg(showBridge);
    toggleModal();
  };

  return (
    <Wrapper>
      {!isLoading ? <Loader /> : <Home cars={cars} onClick={onClick} />}
      {isShowModal && <Modal activeImg={activeImg} onClose={toggleModal} />}
    </Wrapper>
  );
};
