import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  body {
  }
  display: block;
  text-align: center;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding: 30px;

  @media screen and (min-width: 768px) {
    width: 800px;

    font-size: 30px;
    line-height: 1.07;
  }
  @media screen and (min-width: 1100px) {
    width: 1200px;

    font-size: 35px;
    line-height: 1.06;
  }
`;

export const FilterIcon = styled.img.attrs({
  src: './icons/filter.svg',
})`
  width: auto;
  height: 18px;
  fill: blue;
`;

export const FilterButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  padding: 0;
  margin-left: 25px;

  &:hover {
    opacity: 0.85;
  }

  ${({ active }) =>
    (active || '') &&
    `
    opacity: 0.85;
  `}

  ${({ disabled }) =>
    (disabled || '') &&
    `
    pointer-events: none;
    opacity: 0.85;
  `}
`;
