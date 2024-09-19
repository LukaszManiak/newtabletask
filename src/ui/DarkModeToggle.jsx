import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";
import styled from "styled-components";

const StyledModeToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;

  background-color: var(--color-text);
  border-radius: var(--border-radius-lg);
`;

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-bg);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-bg);
  }
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledModeToggle>
      <ButtonIcon>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </ButtonIcon>
      <input onClick={toggleDarkMode} type="checkbox"></input>
    </StyledModeToggle>
  );
}

export default DarkModeToggle;
