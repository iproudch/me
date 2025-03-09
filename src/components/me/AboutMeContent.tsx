import styled from "styled-components";
import WorkExperiences from "./WorkExperiences";
import ContactMe from "./ContactMe";
import { IoCloudDownload } from "react-icons/io5";

const AboutMeContent = () => {
  const fileUrl = `${import.meta.env.BASE_URL}Chitchanok_Laicharoen_Resume.pdf`;

  return (
    <CardContainer>
      <ContentArea>
        <TitleContent>
          <span className="title">Get to know</span>
          <span>
            <span className="title">me</span>
            <span className="title underline"> more</span>
          </span>
          <AboutMeSummary>
            Accomplished software developer with 6 years of experience <br />
            in software development cycle. Including designing, <br />
            developing, coding, and software architecture.
          </AboutMeSummary>
          <DownloadLink href={fileUrl} download target="_blank">
            DOWNLOAD RESUME
            <IoCloudDownload size={18} />
          </DownloadLink>
          <ContactMe />
        </TitleContent>

        <WorkExperienceContainer>
          <WorkExperiences />
        </WorkExperienceContainer>
      </ContentArea>
    </CardContainer>
  );
};

export default AboutMeContent;

const DownloadLink = styled.a`
  background: transparent;
  display: flex;
  color: #f8f8f8;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 0;
  gap: 16px;
  position: relative;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #ccee00;
  }
`;

const AboutMeSummary = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
  font-size: 14px;
`;

const WorkExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 1rem;
  font-size: 14px;
`;

const CardContainer = styled.div`
  position: relative;
  // height: 280px;
  // background-color: #afe00b;
  color: #f7f7f7;
  background-color: #212121;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
  padding: 24px 24px 24px 60px;
  border-radius: 1rem;

  .underline {
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: #afe00b;
    text-decoration-thickness: 3px;
    text-underline-offset: 10px;
  }
`;

const TitleContent = styled.div`
  display: flex;
  padding: 2rem;
  font-size: 2.5rem;
  flex-direction: column;
`;

const ContentArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 2;
`;
