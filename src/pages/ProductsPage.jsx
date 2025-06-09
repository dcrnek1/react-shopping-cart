import { useQuery } from "@tanstack/react-query";
import ProductCard from "../components/ProductCard";
import CardSkeleton from "../components/CardSkeleton";
import { ArrowDownIcon, ArrowUpIcon } from "@phosphor-icons/react";
import { useFiltersState } from "../contexts/filterContext";

export default function ProductsPage() {
  const { sort, setSort, categories, setCategories } = useFiltersState();
  const selectedCategory = categories.find((cat) => cat.selected);

  const fetchProducts = async () => {
    const res = await fetch(
      `https://fakestoreapi.com/products${
        selectedCategory.path !== "" ? "/category/" + selectedCategory.path : ""
      }${"?sort=" + sort.toLowerCase()}`
    );
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  };

  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products", categories, sort],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section className="w-full bg-white flex-1 max-w-7xl mx-auto p-2 z-0">
      <div className="flex flex-row gap-2 items-start justify-between my-5">
        <div className="flex flex-row gap-x-1 gap-y-3 flex-wrap items-center">
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                onClick={() =>
                  setCategories((prev) => {
                    return prev.map((cat, i) => {
                      if (i === index) {
                        return { ...cat, selected: true };
                      } else {
                        return { ...cat, selected: false };
                      }
                    });
                  })
                }
                type="button"
                className={`text-gray-800 ${
                  category.selected
                    ? "bg-gray-300/30"
                    : "bg-white hover:bg-gray-100"
                } border border-gray-300 focus:outline-none font-medium rounded-full text-xs sm:text-sm px-5 py-2`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        <div>
          <button
            onClick={() => setSort((prev) => (prev === "Asc" ? "Desc" : "Asc"))}
            type="button"
            className={`text-gray-800 hover:bg-gray-100 border border-gray-300 focus:outline-none font-medium rounded-full text-xs sm:text-sm px-5 py-2 flex flex-row items-center gap-1`}
          >
            {sort === "Asc" ? <ArrowUpIcon /> : <ArrowDownIcon />}
            {sort}
          </button>
        </div>
      </div>
      <div>
        <div className="w-full flex flex-row justify-end my-3"></div>
        {isLoading && (
          <div
            className={`w-full grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 place-items-start`}
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
                <div
                  key={index}
                  className={`w-full h-full rounded-md flex flex-col justify-between gap-2`}
                >
                  <ProductCard
                    product={product}
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
