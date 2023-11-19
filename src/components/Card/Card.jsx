import Heading from 'components/Heading';
import Subheading from 'components/Subheading';
import { CardWrapper, CardSection, CardImage } from './Card.styled';
const Card = () => {
  return (
    <div>
      <ul class="list list-team">
        <CardWrapper>
          <CardImage
            src={require('../../images/s60_recharge.jpg')}
            alt="Face of the Product Designer"
          />
          <CardSection>
            <Heading>Honda</Heading>
            <Subheading>Civic</Subheading>
          </CardSection>
        </CardWrapper>
      </ul>
    </div>
  );
};
export default Card;
