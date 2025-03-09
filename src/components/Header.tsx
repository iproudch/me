import styled from "styled-components";
import logo from "../assets/logo.svg";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="home" />
      <Nav>
        <a href="#me">Me</a>
        <a href="#projects">Projects</a>
      </Nav>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6rem;
  align-items: center;
  a {
    cursor: pointer;
    text-decoration: none;
    color: #212121;
    &:hover {
      color: #98b800;
      transition: 0.3s;
    }
  }
`;

const Logo = styled.img`
  width: 50px;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
`;
