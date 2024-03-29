import {
  ProductEventListView,
  getProductEventListView,
} from "@swapcard/react-sdk/lib/product/event-list-view";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";

function Products() {
  const [search, setSearch] = useState();
  const [filters, setFilters] = useState();
  const router = useRouter();
  const { categoryId } = router.query;
  return (
    <ProductEventListView
      viewId={process.env.NEXT_PUBLIC_PRODUCT_VIEW_ID}
      search={search}
      stickyOffset={84}
      categoryId={categoryId}
      selectedFilters={filters}
      mobileFiltersMode="SWIPE_BOTTOM_MODAL"
      onSearch={setSearch}
      onFilter={setFilters}
      paginationMode="BUTTON"
      renderHead={({ name }) => (
        <Head>
          <title>{name}</title>
          <meta property="og:title" content={name} />
        </Head>
      )}
      renderCategoryLink={(node, category) => (
        <Link href={`/products?categoryId=${category.id}`}>{node}</Link>
      )}
      renderViewLink={(node) => <Link href={`/products`}>{node}</Link>}
      renderProductCard={(node, product) => (
        <Link href={`/product/${product.id}`}>{node}</Link>
      )}
    />
  );
}

Products.getInitialProps = async (ctx: any) => {
  if (typeof window === "undefined") {
    await getProductEventListView(ctx.client, {
      eventId: process.env.NEXT_PUBLIC_EVENT_ID,
      viewId: process.env.NEXT_PUBLIC_PRODUCT_VIEW_ID,
    });
  }

  return {};
};

export default Products;
