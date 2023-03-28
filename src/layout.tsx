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
