import Heading from 'components/Heading';
import Subheading from 'components/Subheading';
import Price from 'components/Price';
import {
  CardWrapper,
  CardSection,
  Description,
  HorizontalLine,
  CardImage,
} from './Card.styled';
const Card = ({ brand, model, carPrice }) => {
  return (
    <CardWrapper>
      <CardImage
        src={require('../../images/s60_recharge.jpg')}
        alt="Face of the Product Designer"
      />
      <CardSection>
        <Description>
          <Heading>{brand}</Heading>
          <Subheading>{model}</Subheading>
        </Description>
        <HorizontalLine />
        <Price>${carPrice}</Price>
      </CardSection>
    </CardWrapper>
  );
};
export default Card;
