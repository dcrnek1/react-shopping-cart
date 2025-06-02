import CardSkeleton from "./CardSkeleton";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const res = await fetch(
    "https://fakestoreapi.com/products?limit=12&sort=asc"
  );
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export default function TopProductsBanner() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });

  return (
    <>
      <div>
        {isLoading && (
          <div className="grid grid-cols-2 gap-2 place-items-center">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        )}
        {isError && <div>Error: {error}</div>}
        {products && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 place-items-start">
            {products.map((product, index) => {
              return (
                <Link
                  to={`/products/${product.id}`}
                  key={index}
                  className="w-full h-80 rounded-md flex flex-col justify-between gap-2 p-1"
                >
                  <div>
                    <div className="self-center h-40 sm:h-60 w-full">
                      <img
                        src={product.image}
                        className="h-full w-full object-contain"
                        alt=""
                      />
                    </div>
                    <div className="line-clamp-2 text-sm sm:text-base text-left h-10 sm:h-12">
                      {product.title}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
