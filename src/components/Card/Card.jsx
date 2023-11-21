import Heading from 'components/Heading';
import Subheading from 'components/Subheading';
import Price from 'components/Price';
import { addComma } from 'utils';
import {
  CardWrapper,
  CardSection,
  Description,
  HorizontalLine,
  CardImage,
  Button,
} from './Card.styled';
const Card = ({ showBridge, brand, model, carPrice, onClick, description }) => {
  return (
    <CardWrapper>
      <CardImage
        //Images that were provided, showed error 404 (https://goo.gl/W6XXEx , https://goo.gl/zg4adq ,
        // https://goo.gl/NbNN0F). So, needed to take something else.
        src={
          showBridge
            ? require('../../images/bridge.jpg')
            : require('../../images/placeholderCar.jpg')
        }
        onError={e =>
          (e.target.src = require('../../images/placeholderCar.jpg'))
        }
        alt={`${brand} ${model}`}
      />
      <CardSection>
        <Description>
          <Heading>{brand}</Heading>
          <Subheading>{model}</Subheading>
        </Description>
        <Button
          type="button"
          onClick={e => onClick(e, { showBridge, description, brand, model })}
        >
          Read More...
        </Button>
        <HorizontalLine />
        <Price>${addComma(carPrice)}</Price>
      </CardSection>
    </CardWrapper>
  );
};
export default Card;
