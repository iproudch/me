import styled from "styled-components";
import Header from "./components/Header";
import AboutMeOverviews from "./components/me/AboutMeOverviews";
import ProjectOverviews from "./components/projects/ProjectOverviews";

function App() {
  return (
    <>
      <Header />
      <Content>
        <AboutMeOverviews />
        <ProjectOverviews />
      </Content>
    </>
  );
}

export default App;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
