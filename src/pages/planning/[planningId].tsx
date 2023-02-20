import { PlanningEventDetails } from "@swapcard/react-sdk/lib/planning/event-details";
import Link from "next/link";
import { useRouter } from "next/router";

function Planning() {
  const router = useRouter();
  return (
    <div style={{ marginTop: 100 }}>
      <PlanningEventDetails
        planningId={router.query.planningId}
        desktopOffset={84}
        renderExhibitorCard={(node, exhibitor) => (
          <Link href={`/exhibitor/${exhibitor.id}`}>{node}</Link>
        )}
        renderPlanningCard={(node, planning) => (
          <Link href={`/planning/${planning.id}`}>{node}</Link>
        )}
        renderLinkedPlanningCard={(node, planning) => (
          <Link href={`/planning/${planning.id}`}>{node}</Link>
        )}
      />
    </div>
  );
}

export default Planning;
