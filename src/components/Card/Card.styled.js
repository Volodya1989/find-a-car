import styled from 'styled-components';

export const CardWrapper = styled.li`
  box-shadow: var(--shade);
  border-radius: 6px;
  width: 264px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  transition: transform 0.4s;

  &:hover {
    transition: transform 0.4s;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const CardSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  text-align: center;
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: #ffffff;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: left;
  background-color: #f7f7f7;
  padding-left: 10px;
  padding-right: 10px;
`;

export const CardDescription = styled.p`
  margin-bottom: 8px;
  font-size: 22px;
`;
export const CardImage = styled.img`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 200px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
