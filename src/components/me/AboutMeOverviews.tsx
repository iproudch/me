import styled from "styled-components";
import AboutMeContent from "./AboutMeContent";
import Intro from "./Intro";

export default function AboutMeOverviews() {
  return (
    <AboutMeContainer id="me">
      <Intro />
      <AboutMeContent />
    </AboutMeContainer>
  );
}

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
