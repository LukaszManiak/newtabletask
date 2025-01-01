import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { useDarkMode } from "../contexts/DarkModeContext";
import styled from "styled-components";

const StyledModeToggle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  font-weight: 500;

  background-color: var(--color-text);
  border-radius: var(--border-radius-lg);
`;

const Icon = styled.div`
  color: var(--color-bg);
  padding-top: 10px;
  font-size: 26px;
`;

const ToggleWrapper = styled.label`
  position: relative;
  width: 60px;
  height: 30px;
  background-color: var(--color-primary);
  border-radius: 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + div {
    transform: translateX(30px);
  }
`;

const ToggleSlider = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 22px;
  height: 22px;
  background-color: var(--color-bg);
  border-radius: 50%;
  transition: transform 0.3s ease;
`;

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <StyledModeToggle>
      <Icon isDarkMode={isDarkMode}>
        {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
      </Icon>

      <ToggleWrapper>
        <ToggleInput type="checkbox" onChange={toggleDarkMode} />
        <ToggleSlider />
      </ToggleWrapper>
    </StyledModeToggle>
  );
}

export default DarkModeToggle;
