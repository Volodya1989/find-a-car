import carsAPI from '../api/cars.json';
import Home from 'Pages/Home/Home';
import { useState, useEffect } from 'react';
import { Wrapper } from './App.styled';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

export const App = () => {
  const [cars, setCars] = useState(null);
  const [activeImg, setActiveImg] = useState(null);

  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    if (!cars) {
      setCars(carsAPI);
    }
  }, [cars]);

  const toggleModal = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  const onClick = (e, showBridge) => {
    setActiveImg(showBridge);
    toggleModal();
  };

  return (
    <Wrapper>
      {!cars ? <Loader /> : <Home cars={cars} onClick={onClick} />}
      {isShowModal && <Modal activeImg={activeImg} onClose={toggleModal} />}
    </Wrapper>
  );
};
