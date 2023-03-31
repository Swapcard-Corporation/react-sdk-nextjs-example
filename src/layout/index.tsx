import { colors } from "@/ui/colors";
import { playFairDisplay, poppins } from "@/ui/fonts";
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
    .container__Grid-sc-0-1 {
      gap: 24px !important;
      grid-template-columns: repeat(auto-fill,minmax(228px,1fr)) !important;
      margin-bottom: 8px !important;
    }
    .list__Title-sc-0-0, .list__Title-sc-0-1  {
      background: transparent !important;
      padding: 0 !important;
      color: ${colors.main[70]} !important;
      margin-bottom: 18px !important;
      font-weight: 700 !important;
    }
    .grid__Grid-sc-0-8, .grid__Grid-sc-0-6 {
      text-align: center;
    }
    .grid__Name-sc-0-4, .grid__Name-sc-0-3 {
      color: ${colors.main[70]} !important;
      font-weight: 700 !important;
      margin-top: 8px !important;
    }
    .grid__Booth-sc-0-6, .grid__Description-sc-0-4 {
      ${poppins.style}
    }
    .section-pieces__Wrapper-sc-0-0 {
      background-color: ${colors.main[10]};
      border: none;
      padding: 24px !important;

      .description__Description-sc-0-0  {
        ${poppins.style}
      }

      .input__Wrapper-sc-0-4 {
        background-color: transparent !important;
      }

      .section-pieces__Title-sc-0-2 {
        color: ${colors.text};
      }
    }
    .checkbox-with-label__Title-sc-0-0, .label__SelectedValues-sc-0-1 {
      ${poppins.style}
    }
    .time-preferences__Wrapper-sc-0-2 {
      display: none;
    }
    .wrapper__Wrapper-sc-0-0 {
      max-width: 1440px !important;
      grid-template-columns: 432px minmax(1px,1fr) !important;
    }
`;

const Content = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 80px;
  min-height: calc(100vh - 250px);
  padding: 0 48px;
  padding-bottom: 30px;
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
