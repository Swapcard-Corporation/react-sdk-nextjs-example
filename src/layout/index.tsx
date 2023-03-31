import { colors } from "@/ui/colors";
import { playFairDisplay } from "@/ui/fonts";
import { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Footer from "./footer";

import TopBar from "./topbar";

const Reset: any = createGlobalStyle`
    ${reset}
    body {
      overflow-x: hidden;
    }
    html, body, button, input {
      ${playFairDisplay.style};
      color: ${colors.text};
    }
    a {
      text-decoration: none;
      color: inherit;
    }
`;

const Content = styled.div`
  padding-bottom: 30px;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 80px;
`;

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Reset />

      <TopBar />

      <Content>{children}</Content>

      <Footer />
    </>
  );
}
