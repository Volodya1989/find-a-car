import { useState } from 'react';
import Heading from 'components/Card/Heading';
import Subheading from 'components/Card/Subheading';
import Price from 'components/Card/Price';
import Tooltip from '@mui/material/Tooltip';
import useLocalStorage from 'hooks/useLocalStorage';
import { addComma } from 'utils';
import {
  CardWrapper,
  CardSection,
  Description,
  HorizontalLine,
  CardImage,
  Button,
  HeartImg,
  IconWrapper,
} from './Card.styled';
const Card = ({
  showBridge,
  brand,
  model,
  carPrice,
  onClick,
  description,
  id,
  favorites,
}) => {
  const [isFavorite, setIsFavorite] = useState(favorites);
  //setting up state for cars using localStorage hook
  const [localCars, setLocalCars] = useLocalStorage('cars' ?? []);

  //setting up favorites state based on the previous
  const onFavoriteChange = () => {
    setIsFavorite(prevIsShowModal => !prevIsShowModal);

    //updating modified car based on favorites and adding to the original array of cars
    const modifiedCar = localCars.map(obj => {
      if (obj.id === id) {
        return { ...obj, favorites: !isFavorite };
      }
      return obj;
    });

    setLocalCars(modifiedCar);
  };

  return (
    <CardWrapper>
      <Tooltip title="Favorites" placement="top">
        <IconWrapper onClick={e => onFavoriteChange(e)}>
          <HeartImg
            src={
              isFavorite
                ? require('../../images/heart_active.png')
                : require('../../images/heart_normal.png')
            }
            onError={e =>
              (e.target.src = require('../../images/heart_normal.png'))
            }
            alt="Heart"
          />
        </IconWrapper>
      </Tooltip>

      <CardImage
        //Images that were provided, showed error 404 (https://goo.gl/W6XXEx , https://goo.gl/zg4adq ,
        // https://goo.gl/NbNN0F). So, used different ones, but with the same logic.
        src={
          showBridge
            ? require('../../images/bridge.jpg')
            : require('../../images/placeholderCar.jpg')
        }
        //backup image in case we get error during api call
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
