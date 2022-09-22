import {
  ExhibitorEventListView,
  getExhibitorEventListView,
} from "@swapcard/react-sdk/lib/exhibitor/event-list-view";
import Link from "next/link";
import { useState } from "react";
import { Cover } from "../../ui/cover";

function Exhibitors() {
  const [search, setSearch] = useState();
  const [filters, setFilters] = useState();
  return (
    <>
      <Cover
        url="https://cdn-api.swapcard.com/public/images/20c44bc1c2d7488397b76119bf04b605.png"
        height="40vh"
        style={{ margin: "68px 0 30px 9px", width: "calc(100% - 24px)" }}
      />
      <ExhibitorEventListView
        viewId={process.env.NEXT_PUBLIC_EXHIBITOR_VIEW_ID}
        stickyOffset={84}
        search={search}
        onSearch={setSearch}
        selectedFilters={filters}
        onFilter={setFilters}
        renderExhibitorCard={(node, exhibitor) => (
          <Link href={`/exhibitor/${exhibitor.id}`}>
            <a>{node}</a>
          </Link>
        )}
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
