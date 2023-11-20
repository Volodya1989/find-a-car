import Card from 'components/Card/Card';
import { List } from './CardsList.styled';
const CardsList = ({ cars, onClick }) => {
  return (
    <List>
      {cars.map(
        ({
          showBridge = false,
          id,
          heading,
          subheading,
          price,
          description,
        }) => {
          return (
            <Card
              key={id}
              brand={heading}
              model={subheading}
              carPrice={price}
              showBridge={showBridge}
              onClick={onClick}
              activeImg={showBridge}
              description={description}
            />
          );
        }
      )}
    </List>
  );
};
export default CardsList;
