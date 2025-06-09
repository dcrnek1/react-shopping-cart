import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import LazyImage from "../utils/SmartImage";
import { ShoppingCartIcon } from "@phosphor-icons/react";
import { useCartContext } from "../contexts/cartContext";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { addToCart } = useCartContext();

  const fetchProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  };

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProduct(productId),
    enabled: !!productId, // Only run the query if productId is available
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section className="bg-white antialiased max-w-7xl mx-auto w-full">
     {/* Breadcrumbs */}
      <nav
        className="flex py-5 sm:py-5 sm:pb-9 px-2 sm:px-0"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 sm:space-x-2 rtl:space-x-reverse">
          <Link to="/products">
            <div className="flex items-center">
              <div
                className="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 sm:ms-2 dark:text-gray-400 dark:hover:text-white"
              >
                Products
              </div>
            </div>
          </Link>
          <div className="flex items-center">
            <svg
              className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="ms-1 text-sm font-medium text-gray-500 sm:ms-2 dark:text-gray-400 line-clamp-1">
              {product && product.title}
            </span>
          </div>
        </ol>
      </nav>
      {product && (
        <div className="max-w-screen-xl px-4 sm:px-2 mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-2xs lg:max-w-md lg:col-span-5 mx-auto">
              {product && <LazyImage src={product.image} />}
            </div>

            <div className="mt-6 sm:mt-8 lg:mt-0 lg:col-span-7">
              <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                {product && product.title}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  €{product && product.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    <svg
                      className={`w-4 h-4 ${
                        product && product.rating && product.rating.rate < 0.5
                          ? "text-gray-200"
                          : "text-yellow-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className={`w-4 h-4 ${
                        product && product.rating && product.rating.rate < 1.5
                          ? "text-gray-200"
                          : "text-yellow-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className={`w-4 h-4 ${
                        product && product.rating && product.rating.rate < 2.5
                          ? "text-gray-200"
                          : "text-yellow-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className={`w-4 h-4 ${
                        product && product.rating && product.rating.rate < 3.5
                          ? "text-gray-200"
                          : "text-yellow-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                    <svg
                      className={`w-4 h-4 ${
                        product && product.rating && product.rating.rate < 4.5
                          ? "text-gray-200"
                          : "text-yellow-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500">
                    (
                    {product &&
                      product.rating != undefined &&
                      product.rating.rate.toFixed(1)}
                    )
                  </p>
                  <p className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline">
                    {product &&
                      product.rating != undefined &&
                      product.rating.count}{" "}
                    Reviews
                  </p>
                </div>
              </div>

              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button
                  onClick={() => addToCart(product)}
                  className="text-white mt-4 sm:mt-0 bg-primary hover:bg-primary/70 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none flex items-center gap-3 justify-center"
                >
                  <ShoppingCartIcon size={20} weight="bold" />
                  Add to cart
                </button>
              </div>

              <hr className="my-6 sm:my-8 border-gray-200" />

              <p className="mb-6 text-gray-500 text-justify">
                {product && product.description}
              </p>
            </div>
          </div>
        </div>
      )}
      {isLoading && (
        <div className="max-w-7xl mx-auto w-full">
          <div className="sm:grid grid-cols-12">
            <div className="h-70 sm:h-150 bg-gray-50 animate-pulse sm:col-span-5 m-3 rounded-xl"></div>
            <div className="sm:col-span-7 m-3 flex flex-col gap-4">
              <div className="rounded-xl bg-gray-100 animate-pulse h-10 w-full"></div>
              <div className="flex flex-row gap-4">
                <div className="bg-gray-50 animate-pulse h-5 rounded-xl w-20"></div>
                <div className="bg-gray-50 animate-pulse h-5 rounded-xl w-40"></div>
                <div className="bg-gray-50 animate-pulse h-5 rounded-xl w-15"></div>
              </div>
              <div className="rounded-xl bg-gray-100 animate-pulse h-10 w-35"></div>
              <div className="rounded-xl mt-10 bg-gray-50 animate-pulse h-50 w-full"></div>
            </div>
          </div>
        </div>
      )}
      {isError && (
        <div className="max-w-7xl mx-auto w-full p-4">
          <p className="text-red-500">
            Error loading product details. Please try again later.
          </p>
        </div>
      )}
    </section>
  );
}
