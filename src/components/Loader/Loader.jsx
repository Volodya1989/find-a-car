import { ThreeCircles } from 'react-loader-spinner';
import { ThreeCirclesStyled } from './Loader.styled';

const Loader = () => {
  return (
    <ThreeCirclesStyled>
      <ThreeCircles
        height="100"
        width="100"
        color="#63d1f2"
        margin="auto"
        wrapperStyle={{ marginTop: '10%' }}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
    </ThreeCirclesStyled>
  );
};
export default Loader;
