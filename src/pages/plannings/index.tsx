import {
  PlanningEventListView,
  getPlanningEventListView,
} from "@swapcard/react-sdk/lib/planning/event-list-view";
import Link from "next/link";
import { useState } from "react";

function Agenda() {
  const [search, setSearch] = useState();
  const [filters, setFilters] = useState();
  const [aggregationId, setAggregationId] = useState();
  return (
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
