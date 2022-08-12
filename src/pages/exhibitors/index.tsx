import {
  ExhibitorEventListView,
  getEventExhibitorListViewData,
} from "@swapcard/react-sdk/lib/exhibitor/event-list-view";
import Link from "next/link";

function Exhibitors() {
  return (
    <ExhibitorEventListView
      viewId={process.env.NEXT_PUBLIC_EXHIBITOR_VIEW_ID}
      stickyOffset={15}
      renderExhibitorCard={(node, exhibitor) => (
        <Link href={`/exhibitor/${exhibitor.id}`}>
          <a>{node}</a>
        </Link>
      )}
    />
  );
}

Exhibitors.getInitialProps = async (ctx: any) => {
  if (typeof window === "undefined") {
    await getEventExhibitorListViewData(ctx.client, {
      eventId: process.env.NEXT_PUBLIC_EVENT_ID,
      viewId: process.env.NEXT_PUBLIC_EXHIBITOR_VIEW_ID,
    });
  }

  return {};
};

export default Exhibitors;
