import {
  PlanningEventListView,
  getPlanningEventListView,
} from "@swapcard/react-sdk/lib/planning/event-list-view";
import Link from "next/link";
import { useState } from "react";
import { Cover } from "../../ui/cover";

function Agenda() {
  const [search, setSearch] = useState();
  const [filters, setFilters] = useState();
  const [aggregationId, setAggregationId] = useState();
  return (
    <>
      <Cover
        url="https://cdn-api.swapcard.com/public/images/20c44bc1c2d7488397b76119bf04b605.png"
        height="40vh"
        style={{ margin: "68px 0 30px 9px", width: "calc(100% - 24px)" }}
      />
      <PlanningEventListView
        viewId={process.env.NEXT_PUBLIC_PLANNING_VIEW_ID}
        stickyOffset={84}
        search={search}
        onSearch={setSearch}
        selectedFilters={filters}
        onFilter={setFilters}
        aggregationId={aggregationId}
        onChangeAggregationId={setAggregationId}
        renderPlanningCard={(node, planning) => (
          <Link href={`/planning/${planning.id}`}>{node}</Link>
        )}
      />
    </>
  );
}

Agenda.getInitialProps = async (ctx: any) => {
  if (typeof window === "undefined") {
    await getPlanningEventListView(ctx.client, {
      viewId: process.env.NEXT_PUBLIC_PLANNING_VIEW_ID,
    });
  }

  return {};
};

export default Agenda;
