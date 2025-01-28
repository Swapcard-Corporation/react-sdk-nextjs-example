import { H1, Paragraph } from "@/ui/typography";
import {
  ExhibitorEventListView,
  getExhibitorEventListView,
  EventFilterInput,
} from "@swapcard/react-sdk/lib/exhibitor/event-list-view";
import Link from "next/link";
import { useState } from "react";
import Img from "next/image";
import styled from "styled-components";
import Head from "next/head";

const Heading = styled.header`
  display: flex;
  align-items: center;
  gap: 64px;
  justify-content: space-between;
  margin-bottom: 48px;
`;

function Exhibitors() {
  const [search, setSearch] = useState<string>();
  const [filters, setFilters] = useState<EventFilterInput[]>();
  return (
    <>
      <Head>
        <title>Brands</title>
      </Head>
      <Heading>
        <div>
          <H1 style={{ marginBottom: 16 }}>Brands</H1>
          <Paragraph>
            Through international media coverage and cogent buyer connectivity,
            FT’S has provided the exposure to project designers into the next
            stages of success.
          </Paragraph>
        </div>
        <Img src="/img-03.jpg" alt="" width={888} height={240} />
      </Heading>

      <ExhibitorEventListView
        viewId={process.env.NEXT_PUBLIC_EXHIBITOR_VIEW_ID}
        stickyOffset={84}
        search={search}
        onSearch={setSearch}
        selectedFilters={filters}
        onFilter={setFilters}
        renderExhibitorCard={(node, exhibitor) => (
          <Link href={`/exhibitor/${exhibitor.id}`}>{node}</Link>
        )}
        paginationMode="BUTTON"
      />
    </>
  );
}

Exhibitors.getInitialProps = async (ctx: any) => {
  if (typeof window === "undefined") {
    await getExhibitorEventListView(ctx.client, {
      eventId: process.env.NEXT_PUBLIC_EVENT_ID,
      viewId: process.env.NEXT_PUBLIC_EXHIBITOR_VIEW_ID,
    });
  }

  return {};
};

export default Exhibitors;
