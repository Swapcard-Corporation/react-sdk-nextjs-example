import { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Link from "next/link";
import { Cover } from "./ui/cover";

const Reset = createGlobalStyle`
    ${reset}
    body {
      overflow-x: hidden;
    }
    html, body, button, input {
      font-family: 'Roboto', sans-serif;
    }
    a {
      text-decoration: none;
      color: inherit;
    }

    .style__UIBox-sc-0-0 {
      border-radius: 0px;
      border-color: #f2f2f2;
    }

    .list__Title-sc-0-0 {
      background: none;
      padding: 0;
      font-weight: 900
    }

    .grid__Name-sc-0-4 {
      font-size: 20px;
      padding: 30px 0 10px 0;
    }

    .container__Grid-sc-0-1 {
      grid-gap: 30px;
      grid-template-columns: repeat(auto-fill,minmax(250px,1fr));

      .style__UIBox-sc-0-0 {
        text-align: center;
      }
    }

    .wrapper__Wrapper-sc-0-0 {
      max-width: 1400px;
    }

    .item__ItemHeader-sc-0-1 {
      min-height: 50px;

      .label__Label-sc-0-0 {
        font-size: 16px;
        color: #3e3f65;
      }
    }

    .wrapper__Wrapper-sc-0-0 {
      grid-gap: 30px;
    }

    .aside__Aside-sc-0-0 {
      .style__UIBox-sc-0-0 {
        padding: 30px !important;
      }

      .desktop__Header-sc-0-0, .hnprzT, .divider__SimpleDivider-sc-0-0 {
        display: none;
      }
    }

    .image__Image-sc-0-0, .grid__Thumbnail-sc-0-2 {
      border-radius: 0 !important;
    }

    .grid__Booth-sc-0-6 {
      display: none;
    }

    .style__Wrapper-sc-0-0.MwmHP  {
      border-radius: 0;
      margin-bottom: 15px;

      .custom__Left-sc-0-1 {
        display: none;
      }

      .input__Input-sc-0-0 {
        padding-left: 15px;
      }
    }

    .style__CheckMarkContainer-sc-0-1 {
      border-radius: 0;
    }
`;

const TopBarWrapper = styled.div`
  position: fixed;
  top: 15px;
  left: 15px;
  right: 15px;
  background-color: black;
  color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 15px 30px;
  align-items: center;
  z-index: 200;
`;

const Content = styled.div`
  min-height: 100vh;
  padding-bottom: 30px;
`;

const Footer = styled.footer`
  background: black;
  color: white;
  padding: 15px;
  margin: 0 15px;
`;

const Nav = styled.div`
  ul {
    li {
      display: inline-block;

      &:not(:last-child) {
        &:after {
          content: "•";
          margin: 0 15px;
          text-decoration: none !important;
        }
      }
    }
  }
`;

const Title = styled.h3`
  font-size: 20px;
  display: inline-block;
  font-weight: 900;
`;

function TopBar() {
  return (
    <TopBarWrapper>
      <Link href="/">
        <a>
          <Title>{`Fashion Trend'Show 2.0`}</Title>
        </a>
      </Link>

      <Nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/exhibitors">
              <a>Exhibitors & Brands</a>
            </Link>
          </li>
          <li>Contact</li>
        </ul>
      </Nav>
    </TopBarWrapper>
  );
}

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Reset />

      <TopBar />

      <Content>{children}</Content>

      <Footer>Hello</Footer>

      <Cover
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        url="https://cdn-api.swapcard.com/public/images/cc23e0cf8cd0415495b29777ac8f44a5.png"
        height="100vh"
      />
    </>
  );
}
