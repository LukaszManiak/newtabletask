import styled from "styled-components";
import logoLight from "../images/logoHeader.svg";
import logoDark from "../images/logoHeaderDark.svg";
import { useDarkMode } from "../contexts/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();

  return (
    <StyledLogo>
      <Img src={!isDarkMode ? logoLight : logoDark} alt="Logo" />
    </StyledLogo>
  );
}

export default Logo;
