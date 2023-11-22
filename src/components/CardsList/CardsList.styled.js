import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 30px 15px;
  @media screen and (min-width: 1100px) {
    gap: 30px 33px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 30px 15px;
`;
