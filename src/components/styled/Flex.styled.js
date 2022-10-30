import styled from "styled-components";

// create as a utility container

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    text-align: center;
    flex-direction: column;
  }
`;
