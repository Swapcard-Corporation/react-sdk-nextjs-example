import ExhibitorEventDetails from "@swapcard/react-sdk/lib/exhibitor/event-details";
import Link from "next/link";
import { useRouter } from "next/router";

function Exhibitor() {
  const router = useRouter();
  return (
    <ExhibitorEventDetails
      exhibitorId={router.query.exhibitorId}
      stickyOffset={15}
      renderProductCard={(node, product) => (
        <Link href={`/product/${product.id}`}>
          <a>{node}</a>
        </Link>
      )}
    />
  );
}

export default Exhibitor;
