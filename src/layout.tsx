import { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Link from "next/link";
import { Cover } from "./ui/cover";

const Reset: any = createGlobalStyle`
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
      border-radius: 0px !important;
      border-color: #f2f2f2 !important;
    }

    .list__Title-sc-0-0 {
      background: none !important;
      padding: 0 !important;
      font-weight: 900 !important;
    }

    .grid__Name-sc-0-4 {
      font-size: 20px !important;
      padding: 30px 0 10px 0 !important;
    }

    .container__Grid-sc-0-1 {
      grid-gap: 30px !important;
      grid-template-columns: repeat(auto-fill,minmax(250px,1fr)) !important;

      .style__UIBox-sc-0-0 {
        text-align: center !important;
      }
    }

    .wrapper__Wrapper-sc-0-0 {
      max-width: 1400px !important;
    }

    .item__ItemHeader-sc-0-1 {
      min-height: 50px !important;

      .label__Label-sc-0-0 {
        font-size: 16px !important;
        color: #3e3f65 !important;
      }
    }

    .wrapper__Wrapper-sc-0-0 {
      grid-gap: 30px !important;
    }

    .aside__Aside-sc-0-0 {
      .style__UIBox-sc-0-0 {
        padding: 30px !important;
      }

      .desktop__Header-sc-0-0, .hnprzT, .divider__SimpleDivider-sc-0-0 {
        display: none !important;
      }
    }

    .image__Image-sc-0-0, .grid__Thumbnail-sc-0-2 {
      border-radius: 0 !important;
    }

    .grid__Booth-sc-0-6 {
      display: none !important;
    }

    .style__Wrapper-sc-0-0.MwmHP  {
      border-radius: 0 !important;
      margin-bottom: 15px !important;

      .custom__Left-sc-0-1 {
        display: none !important;
      }

      .input__Input-sc-0-0 {
        padding-left: 15px !important;
      }
    }

    .style__CheckMarkContainer-sc-0-1 {
      border-radius: 0 !important;
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
        <Title>{`Fashion Trend'Show 2.0`}</Title>
      </Link>

      <Nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/exhibitors">Exhibitors & Brands</Link>
          </li>
          <li>
            <Link href="/plannings">Agenda</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
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
