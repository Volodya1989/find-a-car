import CardsList from 'components/CardsList';
import { Container } from './Home.styled';

const Home = ({ cars }) => {
  return (
    <Container>
      <CardsList cars={cars} />
    </Container>
  );
};
export default Home;
