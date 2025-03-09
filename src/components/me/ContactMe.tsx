import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import styled from "styled-components";

export default function ContactMe() {
  return (
    <ContactMeContainer>
      <a href="https://github.com/iproudch" target="_blank" rel="noreferrer">
        <IoLogoGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/chitchanok-lcr/"
        target="_blank"
        rel="noreferrer"
      >
        <IoLogoLinkedin size={32} />
      </a>
    </ContactMeContainer>
  );
}
const ContactMeContainer = styled.div`
  display: flex;
  bottom: 64px;
  position: absolute;
  gap: 16px;
  transition: color 0.3s ease-in-out;

  a {
    text-decoration: none;
    color: #f8f8f8;
    &:hover {
      color: #ccee0b;
    }
  }
`;
