import styled from "styled-components";
import { colors } from "./colors";
import { poppins } from "./fonts";

export const Paragraph = styled.p`
  ${poppins.style};
  font-size: 16px;
  line-height: 150%;
  color: ${colors.text};
  max-width: 640px;
`;

export const H3 = styled.h3`
  color: ${colors.main[70]};
  font-size: 20px;
  line-height: 150%;
  font-weight: 700;
  margin-bottom: 16px;
`;

export const H1 = styled.h1`
  color: ${colors.main[100]};
  font-weight: 400;
  font-size: 96px;
  line-height: 115%;
`;
