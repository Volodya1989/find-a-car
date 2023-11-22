import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
flex-direction:row:
// flex-wrap:nowrap;
align-items:center;
  // width: 100%;
  // position: sticky;
  // top: 79px;
  // padding: 30px 0;
  // margin-bottom: 50px;
  // z-index: 2;
`;

export const ResetButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  border: 0;
  border-radius: 50%;
  background: #edeff0;
  background-size: 16px;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
  margin-left: auto;
  position: absolute;
  top: 12px;
  right: 12px;

  &:hover {
    opacity: 0.85;
  }
`;
export const SearchWrapper = styled.div`
  flex: 1;
  max-width: 500px;
  margin-right: auto;
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
