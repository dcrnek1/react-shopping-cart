import CardSkeleton from "./CardSkeleton";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";

const fetchTopProducts = async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products?limit=8&sort=asc"
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export default function TopProductsBanner() {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["topProducts"],
    queryFn: fetchTopProducts,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });

  return (
    <>
      <div>
        {isLoading && (
          <div
            className={`grid grid-cols-2 sm:grid-cols-4 gap-3 place-items-center`}
          >
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        )}
        {isError && <div>Error fetching data. Try again later.</div>}
        {products && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 place-items-start">
            {products.map((product, index) => {
              return (
                <Link
                  to={`/products/${product.id}`}
                  key={index}
                  className={`w-full h-full rounded-md flex flex-col justify-between gap-2`}
                >
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating.rate}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
