import {
  CardWrapper,
  CardSection,
  CardTitle,
  CardDescription,
  CardImage,
} from './Card.styled';
const Card = () => {
  return (
    <div>
      Card
      <ul class="list list-team">
        <CardWrapper>
          <CardImage
            src={require('../../images/s60_recharge.jpg')}
            alt="Face of the Product Designer"
            
          />
          <CardSection>
            <CardTitle>Honda</CardTitle>
            <CardDescription>Civic</CardDescription>
          </CardSection>
        </CardWrapper>
      </ul>
    </div>
  );
};
export default Card;
