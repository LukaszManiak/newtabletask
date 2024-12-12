import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNotFoundContainer = styled.main`
  justify-items: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const H1 = styled.h1`
  font-size: 4rem;
  color: var(--color-bg);
`;

function PageNotFound() {
  return (
    <StyledNotFoundContainer>
      <H1>This page could not be found</H1>
      <Link href="/tables">Go back home</Link>
    </StyledNotFoundContainer>
  );
}

export default PageNotFound;
