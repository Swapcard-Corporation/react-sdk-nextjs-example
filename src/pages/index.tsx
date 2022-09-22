import Link from "next/link";
import styled from "styled-components";
import { Button } from "../ui/button";
import { Cover } from "../ui/cover";

const Baseline = styled.div`
  position: absolute;
  bottom: -90px;
  left: 0;
  right: 0;
  text-align: center;
  max-width: 750px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 60px;
  line-height: 80px;
  font-weight: 900;
  margin-bottom: 40px;
  color: white;
  text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
`;

const Description = styled.h3`
  font-size: 25px;
  line-height: 35px;
  opacity: 0.7;
`;

const Section = styled.div`
  height: calc(100vh - 68px);
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #eeeeee;
  height: calc(100vh - 120px);
  margin: 0 15px;
`;

const Text = styled.div`
  padding: 0 10%;
  font-size: 16px;
  line-height: 30px;
  display: flex;
  align-items: center;
  height: 100%;
`;

function Home() {
  return (
    <>
      <Section>
        <Cover
          url="https://cdn-api.swapcard.com/public/images/7a96308dc77340979ed5ea48d357bc4e.gif"
          style={{
            margin: "68px 15px 15px 15px",
            width: "calc(100% - 30px)",
          }}
          height="calc(100vh - 185px)"
        >
          <Baseline>
            <Title>{`Fashion Trend'Show 2.0`}</Title>
            <Description>
              The event that brings together creators and designers to display
              their new products for the winter 2022 season.
            </Description>
          </Baseline>
        </Cover>
      </Section>

      <Info>
        <div>
          <Text>
            {`Welcome to the Fashion Trend'show 2.0., the event that brings together
          creators and designers to display their new products for the winter
          2022 season . Both a place for exchange and business, this new kind of
          show puts collective intelligence in the spotlight. Flag bearer of a
          responsible industry, the Fashion Trend'show advocates strong values:
          Humanity, Sustainability and Adaptability.`}
          </Text>
        </div>

        <div>
          <Cover
            url="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            height="100%"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link href="/exhibitors">
              <a>
                <Button>Discover our brands</Button>
              </a>
            </Link>
          </Cover>
        </div>
      </Info>
    </>
  );
}

export default Home;
