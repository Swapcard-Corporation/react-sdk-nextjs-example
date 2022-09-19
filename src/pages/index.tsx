import styled from "styled-components";

const Background = styled.div`
  background: url("./cover-home.jpg");
  display: block;
  min-height: calc(100vh - 58px);
  background-size: cover;
  width: 100%;
  position: relative;
`;

const Baseline = styled.div`
  position: absolute;
  right: 5%;
  top: 13%;
  text-align: right;
  color: white;
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 80px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Description = styled.h3`
  font-size: 25px;
  line-height: 35px;
  max-width: 400px;
  opacity: 0.8;
`;

function Home() {
  return (
    <Background>
      <Baseline>
        <Title>Blue Note 2022</Title>
        <Description>
          A music event to explore labels, artists, new releases, and mainly
          testing the Swapcard React SDK.
        </Description>
      </Baseline>
    </Background>
  );
}

export default Home;
