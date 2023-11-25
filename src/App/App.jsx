import carsAPI from '../api/cars.json';
import Home from 'Pages/Home/Home';
import { useState, useEffect } from 'react';
import useFetch from 'use-http';
import ModalDetails from 'components/Modal/ModalDetails';
import { Wrapper, GlobalStyle } from './App.styled';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import { onSortingCars, onResetSorting, useLocalStorage } from 'utils';
import { ToastContainer } from 'react-toastify';
export const App = () => {
  // eslint-disable-next-line
  const { loading, error, jobs } = useFetch();
  const [cars, setCars] = useLocalStorage('cars', null);
  const [sortedCars, setSortedCars] = useState(null);
  const [activeImg, setActiveImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuerySearch] = useState('');

  const onQueryChange = e => {
    if (e.currentTarget.value === ' ') {
      return;
    }
    setQuerySearch(e.currentTarget.value);
  };
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
        setIsLoading(true);

        if (!sortedCars?.length) return;
        setTotalPages(Math.ceil(sortedCars?.length / itemsPerPage));
      }, 1000);
    }
  }, [loading, isLoading, totalPages, sortedCars, cars, setCars]);

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected);
  };

  const toggleModal = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  useEffect(() => {
    const filteredCarsByHeading = cars?.filter(car =>
      car.heading.toLowerCase().includes(query?.toLocaleLowerCase())
    );
    const filteredCarsBySubheading = cars?.filter(car =>
      car.subheading.toLowerCase().includes(query?.toLocaleLowerCase())
    );

    const searchResult = [
      ...(filteredCarsByHeading ?? []),
      ...(filteredCarsBySubheading ?? []),
    ];

    if (!searchResult.length) {
      setSortedCars(searchResult ?? []);

      return;
    }
    let uniqArray = [];

    function uniqObjects(data, key) {
      return (uniqArray = [...new Map(data.map(x => [key(x), x])).values()]);
    }
    uniqObjects(searchResult, car => car.id);
    setSortedCars(uniqArray);
  }, [query, cars]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = sortedCars?.slice(startIndex, endIndex);

  const onClick = (_, showBridge) => {
    setActiveImg(showBridge);

    toggleModal();
  };

  return (
    <Wrapper>
      <GlobalStyle isShowModal={isShowModal} />
      <ToastContainer autoClose={2000} position="top-right" />;
      {!isLoading ? (
        <Loader />
      ) : (
        totalPages && (
          <Home
            onClick={onClick}
            onSortingCars={onSortingCars}
            setSortedCars={setSortedCars}
            onQueryChange={onQueryChange}
            onResetSorting={onResetSorting}
            onPageChange={handlePageChange}
            setQuerySearch={setQuerySearch}
            cars={cars}
            query={query}
            subset={subset}
            pageCount={totalPages}
            forcePage={currentPage}
            sortedCars={sortedCars}
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
