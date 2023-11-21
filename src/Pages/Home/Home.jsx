import CardsList from 'components/CardsList';
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
      <CardsList
        cars={cars}
        onClick={onClick}
        subset={subset}
        onPageChange={onPageChange}
        pageCount={pageCount}
        forcePage={Math.ceil(forcePage)}
      />
    </Container>
  );
};
export default Home;
