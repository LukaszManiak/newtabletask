import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";

const StyledMainNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
`;

function MainNav() {
  return (
    <StyledMainNav>
      <DarkModeToggle />
    </StyledMainNav>
  );
}

export default MainNav;
