import { useState } from 'react';
import CardsList from 'components/CardsList';
import SortingRadios from 'components/SortingRadios';
import { Container } from './Home.styled';
import SettingsButton from 'components/SettingsButton';

const Home = ({
  cars,
  onClick,
  subset,
  onPageChange,
  pageCount,
  forcePage,
  onSortingCars,
  onResetSorting,
  setSortedCars,
}) => {
  const [isShowSorting, setIsShowSorting] = useState(false);

  const sortingToggle = () => {
    setIsShowSorting(prevIsShowModal => !prevIsShowModal);
  };

  const onSettingsClick = () => {
    console.log('isShowSorting', isShowSorting);
    sortingToggle();
  };
  return (
    <Container>
      <SettingsButton onSettingsClick={onSettingsClick} />

      <SortingRadios
        onSortingCars={onSortingCars}
        onResetSorting={onResetSorting}
        setSortedCars={setSortedCars}
        cars={cars}
        isShowSorting={isShowSorting}
      />

      <CardsList
        cars={cars}
        onClick={onClick}
        subset={subset}
        onPageChange={onPageChange}
        pageCount={pageCount}
        forcePage={forcePage}
      />
    </Container>
  );
};
export default Home;
