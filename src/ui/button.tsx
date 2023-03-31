import styled from "styled-components";
import { colors } from "./colors";
import { poppins } from "./fonts";

const Button = styled.span`
  all: unset;
  ${poppins.style};
  border: solid 1px ${colors.main[30]};
  border-radius: 16px;
  padding: 10px 20px;
  color: ${colors.main[100]};
  font-weight: 500;
`;

export default Button;
