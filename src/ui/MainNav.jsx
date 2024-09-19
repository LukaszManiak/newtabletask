import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import TablesList from "./TablesList";

const StyledMainNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
`;
const OldLink = styled.a`
  color: var(--color-text);
  font-size: 2rem;

  align-self: left;
`;

function MainNav() {
  return (
    <StyledMainNav>
      <TablesList />
      <DarkModeToggle />
      <OldLink href="/">Old version of TableTask</OldLink>
    </StyledMainNav>
  );
}

export default MainNav;
