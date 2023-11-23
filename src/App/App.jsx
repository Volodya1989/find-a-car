import carsAPI from '../api/cars.json';
import Home from 'Pages/Home/Home';
import { useState, useEffect } from 'react';
import useFetch from 'use-http';
import ModalDetails from 'components/Modal/ModalDetails';
import { Wrapper, GlobalStyle } from './App.styled';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import {
  onSortingCars,
  onResetSorting,
  // useLocalStorage,
} from 'utils';

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
  const [query, setQuerySearch] = useState('');

  const onQueryChange = e => {
    if (e.currentTarget.value === ' ') return;
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
  }, [loading, isLoading, totalPages, sortedCars, cars]);

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
            onQueryChange={onQueryChange}
            query={query}
            sortedCars={sortedCars}
            setQuerySearch={setQuerySearch}
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

//////////////////////////////////////////////////
// import carsAPI from '../api/cars.json';
// import Home from 'Pages/Home/Home';
// import { useState, useEffect } from 'react';
// import useFetch from 'use-http';
// import ModalDetails from 'components/Modal/ModalDetails';
// import { Wrapper, GlobalStyle } from './App.styled';
// import Loader from 'components/Loader';
// import Modal from 'components/Modal';
// import {
//   onSortingCars,
//   onResetSorting,
//   useLocalStorage,
//   // searchResult,
// } from 'utils';

// export const App = () => {
//   const [cars, setCars] = useState(null);
//   const [sortedCars, setSortedCars] = useState(null);

//   const [activeImg, setActiveImg] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   // eslint-disable-next-line
//   const { loading, error, jobs } = useFetch();
//   const [isShowModal, setIsShowModal] = useState(false);
//   const [query, setQuerySearch] = useLocalStorage('filter', '');

//   const onQueryChange = e => {
//     console.log(e.currentTarget.value);
//     // if (!e.currentTarget.value) {
//     //   console.log('Please enter query');
//     //   return;
//     // }
//     setQuerySearch(e.currentTarget.value);
//   };
//   const itemsPerPage = 5;

//   useEffect(() => {
//     if (loading) {
//       setIsLoading(false);
//     }
//     if (!cars) {
//       setCars(carsAPI);
//       setSortedCars(carsAPI);
//       // searchResult(sortedCars, query, setSortedCars);
//     }

//     if (!loading) {
//       setTimeout(() => {
//         setTotalPages(Math.ceil(cars?.length / itemsPerPage));
//         setIsLoading(true);
//       }, 1000);
//     }
//   }, [cars, loading, isLoading, totalPages, query, sortedCars]);

//   const handlePageChange = selectedPage => {
//     setCurrentPage(selectedPage.selected);
//   };

//   const toggleModal = () => {
//     setIsShowModal(prevIsShowModal => !prevIsShowModal);
//   };
//   console.log('filterInsideAPP', query);

//   // const filteredCarsByHeading = sortedCars?.filter(car =>
//   //   car.heading.toLowerCase().includes(query?.toLocaleLowerCase())
//   // );
//   // console.log('filteredCarsByHeading', filteredCarsByHeading);
//   // const filteredCarsBySubheading = sortedCars?.filter(car =>
//   //   car.subheading.toLowerCase().includes(query?.toLocaleLowerCase())
//   // );
//   // console.log('filteredCarsBySubheading', filteredCarsBySubheading);

//   // const searchResult = [
//   //   ...(filteredCarsByHeading ?? []),
//   //   ...(filteredCarsBySubheading ?? []),
//   // ];
//   // console.log('searchResult', searchResult);
//   // let uniqArray = [];

//   // function uniqObjects(data, key) {
//   //   return (uniqArray = [...new Map(data.map(x => [key(x), x])).values()]);
//   // }
//   // uniqObjects(searchResult, car => car.id);
//   // console.log('uniqArray', uniqArray);

//   useEffect(() => {
//     if (!query) return;
//     const filteredCarsByHeading = sortedCars?.filter(car =>
//       car.heading.toLowerCase().includes(query?.toLocaleLowerCase())
//     );
//     console.log('filteredCarsByHeading', filteredCarsByHeading);
//     const filteredCarsBySubheading = sortedCars?.filter(car =>
//       car.subheading.toLowerCase().includes(query?.toLocaleLowerCase())
//     );
//     console.log('filteredCarsBySubheading', filteredCarsBySubheading);

//     const searchResult = [
//       ...(filteredCarsByHeading ?? []),
//       ...(filteredCarsBySubheading ?? []),
//     ];
//     console.log('searchResult', searchResult);
//     let uniqArray = [];

//     function uniqObjects(data, key) {
//       return (uniqArray = [...new Map(data.map(x => [key(x), x])).values()]);
//     }
//     uniqObjects(searchResult, car => car.id);
//     console.log('uniqArray', uniqArray);
//     setSortedCars(uniqArray);
//   }, [query, sortedCars]);

//   // setSortedCars(uniqArray);
//   // setSortedCars(uniqObjects(searchResult, car => car.id));

//   // const searchResult = (carsArray, searchQuery, setResult) => {
//   //   let queryResult = [];
//   //   const filteredCarsByHeading = carsArray?.filter(car =>
//   //     car.heading.toLowerCase().includes(searchQuery?.toLocaleLowerCase())
//   //   );
//   //   const filteredCarsBySubheading = carsArray?.filter(car =>
//   //     car.subheading.toLowerCase().includes(searchQuery?.toLocaleLowerCase())
//   //   );
//   //   if (filteredCarsByHeading?.length && filteredCarsBySubheading?.length) {
//   //     console.log('ignore');
//   //   }
//   //   if (filteredCarsByHeading) {
//   //     queryResult = [...filteredCarsByHeading];
//   //   }
//   //   if (filteredCarsBySubheading) {
//   //     queryResult = [...filteredCarsBySubheading];
//   //   }
//   //   setResult(queryResult);
//   // };
//   // searchResult(sortedCars, query, setSortedCars);
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const subset = sortedCars?.slice(startIndex, endIndex);

//   const onClick = (_, showBridge) => {
//     setActiveImg(showBridge);

//     toggleModal();
//   };

//   return (
//     <Wrapper>
//       <GlobalStyle isShowModal={isShowModal} />
//       {!isLoading ? (
//         <Loader />
//       ) : (
//         totalPages && (
//           <Home
//             cars={cars}
//             onClick={onClick}
//             subset={subset}
//             onPageChange={handlePageChange}
//             pageCount={totalPages}
//             forcePage={currentPage}
//             onSortingCars={onSortingCars}
//             onResetSorting={onResetSorting}
//             setSortedCars={setSortedCars}
//             onQueryChange={onQueryChange}
//             query={query}
//           />
//         )
//       )}
//       {isShowModal && (
//         <Modal onClose={toggleModal}>
//           <ModalDetails details={activeImg} />
//         </Modal>
//       )}
//     </Wrapper>
//   );
// };
