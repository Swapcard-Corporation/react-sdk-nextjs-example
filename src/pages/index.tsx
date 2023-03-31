import styled from "styled-components";
import { poppins } from "@/ui/fonts";
import { colors } from "@/ui/colors";
import { H3, Paragraph } from "@/ui/typography";
import Button from "@/ui/button";
import Img from "next/image";
import Head from "next/head";
import Link from "next/link";

const Baseline = styled.div`
  margin-top: 160px;
  text-align: center;
  margin-bottom: 120px;
`;

const Title = styled.h1`
  font-size: 96px;
  line-height: 115%;
  color: ${colors.main[100]};
  font-weight: 400;
  margin-bottom: 32px;

  strong {
    display: block;
    font-weight: 700;
  }
`;

const Dates = styled.h3`
  font-size: 14px;
  line-height: 150%;
`;

const Content = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: flex;
  gap: 64px;
  align-items: center;
  margin-bottom: 80px;
`;

function Schedule() {
  return (
    <Grid>
      <Img src="/img-01.jpg" alt="" width={650} height={365} />
      <div>
        <H3>
          <Img
            src="/icons/schedule.svg"
            width={20}
            height={20}
            alt=""
            style={{ position: "relative", top: 2, marginRight: 18 }}
          />
          Schedule
        </H3>
        <Paragraph>
          Experience the excitement and glamour of the fashion world with FT’S!
          Featuring top designers and stunning models, the schedule promises an
          unforgettable showcase of the latest trends and styles. From backstage
          preparations to the electrifying runway presentation, join us for an
          immersive and exhilarating experience that will leave you in awe.
        </Paragraph>
        <Link href="/plannings">
          <Button>Discover the schedule</Button>
        </Link>
      </div>
    </Grid>
  );
}

function Brands() {
  return (
    <Grid>
      <div>
        <H3>
          <Img
            src="/icons/brands.svg"
            width={20}
            height={20}
            alt=""
            style={{ position: "relative", top: 2, marginRight: 18 }}
          />
          Brands
        </H3>
        <Paragraph>
          FT’S has produced a runway that celebrates multiculturalism and
          emerging talent. We strive to identify undiscovered designers by
          providing an accessible and widely reputable platform. Through
          international media coverage and cogent buyer connectivity, FT’S has
          provided the exposure to project designers into the next stages of
          success.
        </Paragraph>
        <Link href="/exhibitors">
          <Button>Explore the list of brands</Button>
        </Link>
      </div>
      <Img src="/img-02.jpg" alt="" width={650} height={365} />
    </Grid>
  );
}

const Center = styled.div`
  text-align: center;
`;

function Speakers() {
  return (
    <Center>
      <H3>
        <Img
          src="/icons/speaker.svg"
          width={24}
          height={24}
          alt=""
          style={{ position: "relative", top: 5, marginRight: 18 }}
        />
        Speakers
      </H3>
      <Paragraph>
        From designers and stylists to sustainability experts and social
        influencers, our diverse and dynamic speakers will provide a wealth of
        knowledge & inspiration.
      </Paragraph>
    </Center>
  );
}

function Showroom() {
  return (
    <Center>
      <H3>
        <Img
          src="/icons/showroom.svg"
          width={24}
          height={24}
          alt=""
          style={{ position: "relative", top: 5, marginRight: 18 }}
        />
        Showroom
      </H3>
      <Paragraph>
        Be the first to witness the unveiling of the hottest new pieces in
        fashion! FT’S will showcase the latest trends and styles, featuring
        innovative designs and stunning collections that will leave you
        breathless.
      </Paragraph>
    </Center>
  );
}

function Home() {
  return (
    <>
      <Head>
        <title>{`Fashion Trend'Show`}</title>
      </Head>
      <Baseline>
        <Title>
          <strong>Fashion</strong>
          {`Trend'Show`}
        </Title>
        <Dates className={poppins.className}>
          Thursday, March 3, 2024 from 5:00 PM to 9:00 PM.
        </Dates>
      </Baseline>

      <Content>
        <Schedule />
        <Brands />
        <Speakers />
        <Showroom />
      </Content>
    </>
  );
}

export default Home;
