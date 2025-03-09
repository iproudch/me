import styled from "styled-components";

export default function Intro() {
  return (
    <IntroContainer>
      <Text className="title">Hello,</Text>
      <Text className="subtitle">I'm Chitchanok Laicharoen</Text>
    </IntroContainer>
  );
}

const Text = styled.div`
  display: flex;
  animation: reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s;
  @keyframes reveal {
    0% {
      transform: translate(0, 100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  &.title {
    font-size: 148px;
  }

  &.subtitle {
    font-size: 56px;
  }
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;
