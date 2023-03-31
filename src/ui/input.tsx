import styled from "styled-components";
import { colors } from "./colors";
import { poppins } from "./fonts";

const Input = styled.input`
  all: unset;
  ${poppins.style};
  border: solid 1px ${colors.main[30]};
  border-radius: 16px;
  padding: 12px 16px;
  color: ${colors.main[100]};
  font-weight: 400;
  font-size: 14px;
`;

export default Input;
