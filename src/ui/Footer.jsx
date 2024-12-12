import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  gap: 3.2rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <p>© 2024 TableTask</p>
      <p>
        Made by{" "}
        <Link href="https://github.com/LukaszManiak">Łukasz Maniak</Link>
      </p>
    </FooterContainer>
  );
}

export default Footer;
