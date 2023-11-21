import {
  ModalDetailsStyled,
  Description,
  Text,
  Heading,
} from './ModalDetails.styled';
export const ModalDetails = ({ details }) => {
  const { showBridge, description, brand, model } = details;
  return (
    <>
      <ModalDetailsStyled
        src={
          showBridge
            ? require('../../images/bridge.jpg')
            : require('../../images/placeholderCar.jpg')
        }
        onError={e =>
          (e.target.src = require('../../images/placeholderCar.jpg'))
        }
        alt="large image"
        width="600"
      />
      <Description>
        <Heading>{`Read more details about ${brand} ${model}`}</Heading>
        <Text>{description}</Text>
      </Description>
    </>
  );
};
export default ModalDetails;
