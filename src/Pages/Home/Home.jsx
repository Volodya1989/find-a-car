import { useState, useEffect } from 'react';
import CardsList from 'components/CardsList';
import SortingRadios from 'components/SortingRadios';
import { MainSection, ToolkitWrapper } from './Home.styled';
import SettingsButton from 'components/SettingsButton';
import Search from 'components/Search';
import NoCars from 'components/NoCars';
import carsAPI from '../../api/cars.json';
import useFetch from 'use-http';
import ModalDetails from 'components/Modal/ModalDetails';
import { Wrapper, GlobalStyle, StyledToastContainer } from './Home.styled';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import useLocalStorage from 'hooks/useLocalStorage';
import { onSortingCars, onResetSorting } from 'utils';
import { ToastContainer } from 'react-toastify';

const Home = () => {
  const [isShowSorting, setIsShowSorting] = useState(false);
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

  //setting query state on change and passing it as props to search component
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
  }, [loading, sortedCars, cars, setCars]);

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

  const handlePageChange = selectedPage => {
    setCurrentPage(selectedPage.selected);
  };

  const toggleModal = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = sortedCars?.slice(startIndex, endIndex);

  const onClick = (_, showBridge) => {
    setActiveImg(showBridge);

    toggleModal();
  };

  const sortingToggle = () => {
    setIsShowSorting(prevIsShowModal => !prevIsShowModal);
  };

  const onCloseSortingBar = value => {
    setIsShowSorting(value);
  };
  const onSettingsClick = () => {
    sortingToggle();
  };

  return (
    <Wrapper>
      <GlobalStyle isShowModal={isShowModal} />
      <StyledToastContainer autoClose={2000} position="top-right">
        <ToastContainer />;
      </StyledToastContainer>
      {!isLoading ? (
        <Loader />
      ) : (
        totalPages && (
          <MainSection>
            <ToolkitWrapper>
              <Search onQueryChange={onQueryChange} query={query} />
              <SettingsButton onSettingsClick={onSettingsClick} />
              <SortingRadios
                onSortingCars={onSortingCars}
                onResetSorting={onResetSorting}
                setSortedCars={setSortedCars}
                cars={cars}
                isShowSorting={isShowSorting}
                onCloseSortingBar={onCloseSortingBar}
                sortedCars={sortedCars}
                setQuerySearch={setQuerySearch}
              />
            </ToolkitWrapper>
            {sortedCars.length ? (
              <CardsList
                cars={cars}
                onClick={onClick}
                subset={subset}
                onPageChange={handlePageChange}
                pageCount={totalPages}
                forcePage={currentPage}
              />
            ) : (
              <NoCars />
            )}
          </MainSection>
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
export default Home;
