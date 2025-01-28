import { ExhibitorEventDetails } from "@swapcard/react-sdk/lib/exhibitor/event-details";
import Link from "next/link";
import { useRouter } from "next/router";

function Exhibitor() {
  const router = useRouter();
  return (
    <div style={{ marginTop: 100 }}>
      <ExhibitorEventDetails
        exhibitorId={router.query.exhibitorId as string}
        stickyOffset={84}
        renderProductCard={(node, product) => (
          <Link href={`/product/${product.id}`}>{node}</Link>
        )}
        renderPlanningCard={(node, planning) => (
          <Link href={`/planning/${planning.id}`}>{node}</Link>
        )}
        onClickOnBookmarkButton={() =>
          window.open("https://swapcard.com", "_blank")
        }
      />
    </div>
  );
}

export default Exhibitor;
