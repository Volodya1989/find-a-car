import CardsList from 'components/CardsList';
import { Container } from './Home.styled';

const Home = ({ cars, onClick }) => {
  return (
    <Container>
      <CardsList cars={cars} onClick={onClick} />
    </Container>
  );
};
export default Home;
