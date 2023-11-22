import carsAPI from '../api/cars.json';
import Home from 'Pages/Home/Home';
import { useState, useEffect } from 'react';
import useFetch from 'use-http';
import ModalDetails from 'components/ModalDetails';
import { Wrapper, GlobalStyle } from './App.styled';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import { onSortingCars } from 'utils';
import { onResetSorting } from 'utils';

export const App = () => {
  const [cars, setCars] = useState(null);
  const [sortedCars, setSortedCars] = useState(null);

  const [activeImg, setActiveImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line
  const { loading, error, jobs } = useFetch();
  const [isShowModal, setIsShowModal] = useState(false);
  const itemsPerPage = 5;

  useEffect(() => {
    if (loading) {
      setIsLoading(false);
    }
    if (!cars) {
      setCars(carsAPI);
      setSortedCars(carsAPI);
    }

    if (!loading) {
      setTimeout(() => {
        setTotalPages(Math.ceil(cars?.length / itemsPerPage));
        setIsLoading(true);
      }, 1000);
    }
  }, [cars, loading, isLoading, totalPages]);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected);
  };

  const toggleModal = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };
  //sorting methods
  // const onSortingCars = value => {
  //   if (!cars) return;

  //   if (value === 'Brand Name') {
  //     const inAlphabeticalBrandOrder = [...cars]?.sort((firstCar, secondCar) =>
  //       firstCar.heading.localeCompare(secondCar.heading)
  //     );
  //     setSortedCars(inAlphabeticalBrandOrder);
  //     return;
  //   } else if (value === 'Model Name') {
  //     const inAlphabeticalModelOrder = [...cars]?.sort((firstCar, secondCar) =>
  //       firstCar.subheading.localeCompare(secondCar.subheading)
  //     );
  //     setSortedCars(inAlphabeticalModelOrder);
  //     return;
  //   } else if (value === 'Price Amount') {
  //     const inAscendingPriceOrder = [...cars]?.sort(
  //       (firstCar, secondCar) => firstCar.price - secondCar.price
  //     );
  //     setSortedCars(inAscendingPriceOrder);
  //     return;
  //   }
  // };

  //reseting what was sorted
  // const onResetSorting = () => {
  //   if (!cars) return;
  //   setSortedCars(cars);
  //   console.log('RESETED', sortedCars);
  //   return;
  // };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = sortedCars?.slice(startIndex, endIndex);

  const onClick = (e, showBridge) => {
    setActiveImg(showBridge);

    toggleModal();
  };

  return (
    <Wrapper>
      <GlobalStyle isShowModal={isShowModal} />
      {!isLoading ? (
        <Loader />
      ) : (
        totalPages && (
          <Home
            cars={cars}
            onClick={onClick}
            subset={subset}
            onPageChange={handlePageChange}
            pageCount={totalPages}
            forcePage={currentPage}
            onSortingCars={onSortingCars}
            onResetSorting={onResetSorting}
            setSortedCars={setSortedCars}
          />
        )
      )}
      {isShowModal && (
        <Modal onClose={toggleModal}>
          <ModalDetails details={activeImg} />
        </Modal>
      )}
    </Wrapper>
  );
};
