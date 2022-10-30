import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  max-width: 100%;
  padding: 0 1.25rem;
  margin: 0 auto;

  h1 {
    &:active {
      color: red;
    }

    &:hover {
      color: blue;
    }
  }
`;
