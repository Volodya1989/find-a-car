import Heading from 'components/Heading';
import Subheading from 'components/Subheading';
import Price from 'components/Price';
import {
  CardWrapper,
  CardSection,
  HorizontalLine,
  CardImage,
} from './Card.styled';
const Card = () => {
  return (
    <div>
      <ul>
        <CardWrapper>
          <CardImage
            src={require('../../images/s60_recharge.jpg')}
            alt="Face of the Product Designer"
          />
          <CardSection>
            <Heading>Honda</Heading>
            <Subheading>Civic</Subheading>
            <HorizontalLine />
            <Price>$45,000</Price>
          </CardSection>
        </CardWrapper>
      </ul>
    </div>
  );
};
export default Card;
