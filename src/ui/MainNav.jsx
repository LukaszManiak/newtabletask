import styled from "styled-components";
import DarkModeToggle from "./DarkModeToggle";
import TablesList from "./TablesList";

const StyledMainNav = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  gap: 0.4rem;
  align-items: center;

  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
`;
const OldLink = styled.a`
  color: var(--color-text);
  font-size: 1.6rem;
  text-decoration: underline;
  font-weight: 300;

  align-self: left;
`;
const ButtomContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

function MainNav() {
  return (
    <StyledMainNav>
      <TablesList />
      <ButtomContainer>
        <DarkModeToggle />
        <OldLink target="_blank" href="https://tabletasks.netlify.app/">
          Old version of TableTask
        </OldLink>
      </ButtomContainer>
    </StyledMainNav>
  );
}

export default MainNav;
