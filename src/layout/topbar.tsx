import styled from "styled-components";
import Link from "next/link";
import { colors } from "@/ui/colors";
import Logo from "./logo";
import { Nav } from "./nav";

const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  color: ${colors.main[100]};
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  z-index: 200;
  height: 80px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 48px;
`;

export default function TopBar() {
  return (
    <TopBarWrapper>
      <Logo />

      <Nav>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/exhibitors">Brands</Link>
          </li>
          <li>
            <Link href="/plannings">Schedule</Link>
          </li>
          <li>
            <Link href="/products">Showroom</Link>
          </li>
        </ul>
      </Nav>
    </TopBarWrapper>
  );
}
