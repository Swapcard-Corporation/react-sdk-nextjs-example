import { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Link from "next/link";

const Reset = createGlobalStyle`
    ${reset}
    html, body {
      font-family: "sofia-pro";
      background-image: linear-gradient( 95.2deg, #d2e3dfb7 26.8%, #cfe5efd7 64% );
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`;

const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #142e31;
  color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 15px 30px;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  z-index: 200;
`;

const Content = styled.div`
  position: relative;
  top: 58px;
`;

const Nav = styled.div`
  ul {
    li {
      display: inline-block;
      margin-left: 15px;
    }
  }
`;

const Title = styled.h3`
  font-size: 20px;
`;

const Footer = styled.footer`
  background-color: #767594;
  color: white;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 30px;
  align-items: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-top: 30px;
`;

function TopBar() {
  return (
    <TopBarWrapper>
      <Link href="/">
        <a>
          <Title>Blue Note</Title>
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
              <a>Exhibitors</a>
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
      <Footer>Footer</Footer>
    </>
  );
}
