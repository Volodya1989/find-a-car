import styled from 'styled-components';

export const Wrapper = styled.section`
  flex-direction: 'row';
  alignitems: 'center';
  position: relative;
`;

export const Label = styled.label`
  font-size: 22px;
  font-weight: 300;
  width: 200px;
  color: white;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.2s ease;
`;
export const SearchWrapper = styled.div`
  flex: 1;
  max-width: 400px;
  @media screen and (min-width: 768px) {
    margin-right: auto;
    width: 400;
  }
`;

export const Field = styled.input`
  display: flex;
  border: 0;
  font-size: 22px;
  background-color: transparent;
  padding: 10px 15px;
  border-bottom: 2px solid #d5f5f4;
  outline: none;
  width: 200px;
  color: white;
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  // @media screen and (min-width: 1100px) {
  //   width: 450px;
  // }

  ${({ disabled }) =>
    (disabled || '') &&
    `
    pointer-events: none;
  `}

  &:focus {
    border-color: #6118de;
  }

  &:focus ~ ${Label} {
    transform: translateY(-50px);
    scale: 0.9;
    color: #9ca5b5;
  }

  ${({ value = '' }) =>
    value &&
    `
    & ~ ${Label} {
      transform: translateY(-50px);

    }
  `}
`;
