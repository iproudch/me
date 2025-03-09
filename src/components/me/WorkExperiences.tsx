import styled from "styled-components";

const WorkExperiences = () => {
  return (
    <>
      <h3 style={{ color: "#fff", marginBottom: "10px" }}>Work experience</h3>
      <Timeline>
        <TimelineItem>
          <BulletContainer>
            <Bullet />
          </BulletContainer>
          <Title>Frontend Developer</Title>
          <Year>Make Digital / Nov 2022 - Present</Year>
          <Description>
            Designed and developed user interfaces for web applications, <br />
            enhancing user experience and engagement <br />
            implemented responsive design, <br />
            ensuring seamless functionality across devices and browsers <br />
            built and maintained web applications using React and modern
            frontend technologies <br />
            optimizing performance and scalability
            <TagContainer>
              <Tag>React</Tag> <Tag>TypeScript</Tag>
              <Tag>Styled-components</Tag> <Tag>Playwright</Tag>
              <Tag>Storybook</Tag>
              <Tag>Graphql</Tag> <Tag>Mongodb</Tag>
            </TagContainer>
          </Description>
        </TimelineItem>

        <TimelineItem>
          <BulletContainer>
            <Bullet />
          </BulletContainer>
          <Title>Software Engineer</Title>
          <Year>Ttb Bank / May 2022 - Nov 2022</Year>
          <Description>
            Contributed to the backend development of ttb touch,
            <br /> the mobile banking application of ttb bank.
            <br />
            Developed new features and maintained microservices <br />
            for fund transfers, withdrawals, and money top-ups
            <br />
            Identified and resolved production issues for transaction processing
            <TagContainer>
              <Tag>Java</Tag>
              <Tag>Spring Boot</Tag>
              <Tag>Kafka</Tag>
              <Tag>Mongodb</Tag>
            </TagContainer>
          </Description>
        </TimelineItem>

        <TimelineItem>
          <BulletContainer>
            <Bullet />
          </BulletContainer>
          <Title>Programmer Analyst</Title>
          <Year>AIS / Oct 2018 - May 2022</Year>
          <Description>
            Worked as a Full-Stack Developer, designing databases and user
            interfaces <br />
            for a new web application to replace a legacy system <br />
            Developed and maintained web applications and batch jobs
            <TagContainer>
              <Tag>Java</Tag>
              <Tag>Spring Boot</Tag>
              <Tag>Angular</Tag>
              <Tag>Postgresql</Tag>
              <Tag>Spring Batch</Tag>
            </TagContainer>
          </Description>
        </TimelineItem>
      </Timeline>
    </>
  );
};

export default WorkExperiences;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding-left: 20px;
  border-left: 4px solid #ccee00;
  margin-left: 15px;
  gap: 8px;
`;

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 8px;
  padding: 8px 0 8px 16px;

  &:hover {
    background-color: #474747;
    border-radius: 8px;
    transition: 0.3s;
  }
`;

const BulletContainer = styled.div`
  position: absolute;
  left: -35px;
  top: 12px;
  display: flex;
  align-items: center;
`;

const Bullet = styled.div`
  width: 18px;
  height: 18px;
  background-color: #ccee00;
  border-radius: 50%;
  margin-left: 4px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ccee00;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Year = styled.span`
  font-size: 12px;
  color: #f0eded;
`;

const Description = styled.span`
  font-size: 15px;
  color: #fff;
  margin-top: 5px;
`;

const TagContainer = styled.div`
  display: flex;
  padding-top: 16px;
  gap: 8px;
  width: 80%;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: #f0f5e0;
  color: #212121;
  padding: 2px 4px;
  border-radius: 4px;
`;
