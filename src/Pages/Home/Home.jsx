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
}) => {
  return (
    <Container>
      <SortingRadios />
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
