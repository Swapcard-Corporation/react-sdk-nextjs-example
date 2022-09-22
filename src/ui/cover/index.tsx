import styled from "styled-components";

interface CoverProps {
  url: string;
  height: string;
}

export const Cover = styled.div<CoverProps>`
  background: url("${({ url }) => url}");
  display: block;
  min-height: ${({ height }) => height};
  background-size: cover;
  width: 100%;
  position: relative;
  background-position: center;
`;
