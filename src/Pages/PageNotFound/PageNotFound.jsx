import { NotFound, Wrapper } from './PageNotFound.styled';
const PageNotFound = () => {
  return (
    <Wrapper>
      <NotFound>
        404 Error <br />
        Page Not Found
      </NotFound>
    </Wrapper>
  );
};

export default PageNotFound;
