import Img from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 20px;
  font-weight: 400;

  strong {
    font-weight: 700;
  }
`;

export default function Logo() {
  return (
    <Link
      href="/"
      style={{ display: "flex", alignItems: "center", gap: 24, width: 242 }}
    >
      <Img
        src="/icons/logo.svg"
        width={22}
        height={20}
        alt=""
        style={{ top: 2, position: "relative" }}
      />
      <Title>
        <strong>Fashion </strong>
        {`Trend'Show`}
      </Title>
    </Link>
  );
}
