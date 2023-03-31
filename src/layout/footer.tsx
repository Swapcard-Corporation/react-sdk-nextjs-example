import styled from "styled-components";
import { colors } from "@/ui/colors";
import Logo from "./logo";
import { Nav } from "./nav";
import Button from "@/ui/button";
import { poppins } from "@/ui/fonts";
import Input from "@/ui/input";

const Wrapper = styled.footer`
  color: ${colors.main[100]};
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 48px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-bottom: 32px;
`;

const Label = styled.label`
  ${poppins.style}
  color: ${colors.text};
  font-size: 14px;
  line-height: 21px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 32px;
`;

function NewsLetter() {
  return (
    <Form>
      <Label>Sign up for early access</Label>
      <Input
        style={{ minWidth: 296 }}
        type="email"
        placeholder="Enter your email here"
      />
      <Button>Subscribe</Button>
    </Form>
  );
}

export default function Footer() {
  return (
    <Wrapper>
      <Grid>
        <Logo />

        <Nav>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Legal Notice</li>
          </ul>
        </Nav>
      </Grid>
      <Grid>
        <span>Social networks</span>
        <NewsLetter />
      </Grid>
    </Wrapper>
  );
}
