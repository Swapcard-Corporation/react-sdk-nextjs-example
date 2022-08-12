import ProductEventDetails from "@swapcard/react-sdk/lib/product/event-details";
import { useRouter } from "next/router";

function Product() {
  const router = useRouter();
  return (
    <ProductEventDetails productId={router.query.productId} stickyOffset={15} />
  );
}

export default Product;
