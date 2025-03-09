import styled from "styled-components";
import ChairakBlacklist from "/pictures/cr-blacklist.png";
import MyExpense from "/pictures/my-expense.jpeg";

export default function ProjectOverviews() {
  return (
    <ProjectOverviewsContainer id="projects">
      <Header>
        <Underline>My Pro</Underline>jects
      </Header>
      <CardContainer>
        <Card
          href="https://iproudch.github.io/chairak-blacklist/"
          target="_blank"
        >
          <Image src={ChairakBlacklist} alt="" />
          <ContentContainer>
            <Title>Customer Credit</Title>
            <Description>
              internal web application for my family business to checking
              customer credit
            </Description>
          </ContentContainer>
          <TagContainer>
            <Tag>React</Tag>
            <Tag>Firebase</Tag>
            <Tag>Tailwind CSS</Tag>
          </TagContainer>
        </Card>
        <Card href="https://iproudch.github.io/my-expense/" target="_blank">
          <Image src={MyExpense} alt="" />
          <ContentContainer>
            <Title>Expense Tracking</Title>
            <Description>
              expense tracking application that can track expenses <br /> and
              calculate expense per month
            </Description>
          </ContentContainer>
          <TagContainer>
            <Tag>React</Tag>
            <Tag>Firebase</Tag>
            <Tag>Daisy UI</Tag>
          </TagContainer>
        </Card>
      </CardContainer>
    </ProjectOverviewsContainer>
  );
}

const ProjectOverviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ccee00;
  position: relative;
  overflow: hidden;
  padding: 24px 24px 24px 60px;
  border-radius: 1rem;
  gap: 2rem;
`;

const Header = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #2f2a2a;
`;

const Underline = styled.span`
  text-decoration: underline;
  text-underline-offset: 14px;
  text-decoration-color: #fff;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Card = styled.a`
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  background-color: #fff;
  gap: 1rem;
  padding: 1.5rem;
  border-radius: 12px;
  width: 100%;
  max-width: 250px;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 0.75rem;
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.5rem;
    border-radius: 6px;
  }

  &:hover {
    cursor: pointer;
    background-color: #f0f5e0;
    transition: 0.3s;
  }
`;

const Image = styled.img`
  height: 175px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #2f2a2a;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled.div`
  background-color: #212121;
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 12px;
`;
