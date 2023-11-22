import CardsList from 'components/CardsList';
import SortingRadios from 'components/SortingRadios';
import { Container } from './Home.styled';

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
  return (
    <Container>
      <SortingRadios
        onSortingCars={onSortingCars}
        onResetSorting={onResetSorting}
        setSortedCars={setSortedCars}
        cars={cars}
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
