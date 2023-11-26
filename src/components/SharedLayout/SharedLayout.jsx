import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledLink,
  StyledHeader,
  StyledList,
  StyledItem,
} from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <div>
      <StyledHeader>
        <StyledList>
          <StyledItem>
            <StyledLink to="/" end>
              Find A Car
            </StyledLink>
          </StyledItem>
        </StyledList>
      </StyledHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
