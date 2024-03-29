import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 30px 15px;
  @media screen and (min-width: 768px) {
    gap: 30px 20px;
  }
  @media screen and (min-width: 1150px) {
    gap: 30px 25px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 30px 15px;
`;
