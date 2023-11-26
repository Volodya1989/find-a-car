import { Oval } from 'react-loader-spinner';
import { ThreeCirclesStyled } from './Loader.styled';

const Loader = () => {
  return (
    <ThreeCirclesStyled>
      <Oval
        height={60}
        width={60}
        color="#63d1f2"
        wrapperStyle={{ marginTop: '10%' }}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#63d1f2"
        strokeWidth={3}
        strokeWidthSecondary={3}
      />
    </ThreeCirclesStyled>
  );
};
export default Loader;
