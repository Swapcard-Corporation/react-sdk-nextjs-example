import styled from "styled-components";
import { colors } from "./colors";
import { poppins } from "./fonts";

export const Paragraph = styled.p`
  ${poppins.style};
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 26px;
  color: ${colors.text};
  max-width: 640px;
  margin-left: auto;
  margin-right: auto;
`;

export const H3 = styled.h3`
  color: ${colors.main[70]};
  font-size: 20px;
  line-height: 150%;
  font-weight: 700;
  margin-bottom: 16px;
`;
