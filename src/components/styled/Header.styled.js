import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: #ebfbff;
  padding: 2rem 0;
`;

// since the nav and logo is used once in the header we put here
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 2.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 2rem;
  }
`;
