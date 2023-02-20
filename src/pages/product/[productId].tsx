import { ProductEventDetails } from "@swapcard/react-sdk/lib/product/event-details";
import { useRouter } from "next/router";
import Link from "next/link";

function Product() {
  const router = useRouter();
  return (
    <ProductEventDetails
      productId={router.query.productId}
      stickyOffset={84}
      renderExhibitorCard={(node, exhibitor) => (
        <Link href={`/exhibitor/${exhibitor.id}`}>{node}</Link>
      )}
    />
  );
}

export default Product;
