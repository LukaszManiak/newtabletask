import styled from "styled-components";
import Button from "./Button";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2.4rem;
`;

const H = styled.h2`
  font-size: 3.4rem;
  letter-spacing: 0.6rem;
  font-weight: bold;
  color: var(--color-bg);
`;

function Header() {
  return (
    <StyledHeader>
      <H>Platform Launch</H>
      <Button variation="accent" size="medium">
        Add new task+
      </Button>
    </StyledHeader>
  );
}

export default Header;
