import { ProductEventDetails } from "@swapcard/react-sdk/lib/product/event-details";
import { useRouter } from "next/router";
import Link from "next/link";

function Product() {
  const router = useRouter();
  return (
    <div style={{ marginTop: 100 }}>
      <ProductEventDetails
        productId={router.query.productId}
        stickyOffset={84}
        renderExhibitorCard={(node, exhibitor) => (
          <Link href={`/exhibitor/${exhibitor.id}`}>{node}</Link>
        )}
        onClickOnBookmarkButton={() =>
          window.open("https://swapcard.com", "_blank")
        }
      />
    </div>
  );
}

export default Product;
