import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  text-align: left;
  font-weight: 700;
  width: 100%;

  &:hover {
    color: lightgray;
  }

  // margin-right: auto;
  // margin-left: auto;
  // padding: 30px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 1.07;
  }

  // &.active {
  //   color: red;
  //   text-decoration: underline;
  // }
`;

export const StyledHeader = styled.nav`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #fff;
  background: linear-gradient(
    90deg,
    hsla(217, 100%, 50%, 1) 0%,
    hsla(186, 100%, 69%, 1) 100%
  );
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const StyledList = styled.ul`
  display: flex;
  gap: 50px;
  list-style: none;
  text-decoration: none;
`;

export const StyledItem = styled.li`
  text-decoration: none;
`;
