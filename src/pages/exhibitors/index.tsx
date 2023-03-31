import {
  ExhibitorEventListView,
  getExhibitorEventListView,
} from "@swapcard/react-sdk/lib/exhibitor/event-list-view";
import Link from "next/link";
import { useState } from "react";

function Exhibitors() {
  const [search, setSearch] = useState();
  const [filters, setFilters] = useState();
  return (
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
