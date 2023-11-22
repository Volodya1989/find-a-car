import { useState } from 'react';
import CardsList from 'components/CardsList';
import SortingRadios from 'components/SortingRadios';
import { Container, ToolkitWrapper } from './Home.styled';
import SettingsButton from 'components/SettingsButton';
import Search from 'components/Search';
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

  const onCloseSortingBar = value => {
    setIsShowSorting(value);
  };
  const onSettingsClick = () => {
    sortingToggle();
  };

  return (
    <Container>
      <ToolkitWrapper>
        <Search />
        <SettingsButton onSettingsClick={onSettingsClick} />
        <SortingRadios
          onSortingCars={onSortingCars}
          onResetSorting={onResetSorting}
          setSortedCars={setSortedCars}
          cars={cars}
          isShowSorting={isShowSorting}
          onCloseSortingBar={onCloseSortingBar}
        />
      </ToolkitWrapper>
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
