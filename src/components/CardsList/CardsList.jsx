import Card from 'components/Card/Card';
import { List } from './CardsList.styled';
const CardsList = ({ cars }) => {
  console.log('cars', cars);
  return (
    <List>
      {cars.map(({ id, heading, subheading, price }) => {
          return (
            <Card
              key={id}
              brand={heading}
              model={subheading}
              carPrice={price}
            />
          );
        })}
    </List>
  );
};
export default CardsList;
