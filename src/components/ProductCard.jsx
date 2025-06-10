import { ShoppingCartSimpleIcon } from "@phosphor-icons/react";
import SmartImage from "../utils/SmartImage";
import { Link } from "react-router-dom";
import VaulDrawer from "./addToCartDrawer";

export default function ProductCard({ product }) {

  return (
    <div className="w-full max-w-sm bg-white outline outline-slate-200 rounded-md">
      <Link to={`/products/${product.id}`}>
        <div className="flex flex-row justify-center">
          <SmartImage
            className="p-2 rounded-t-lg h-50 w-full"
            object="object-scale-down"
            src={product.image}
            alt={`Image of ${product.title}`}
          />
        </div>
        <div className="px-4 pb-4 pt-2">
          <h5 className="text-sm sm:text-xl font-semibold tracking-tight text-gray-900 line-clamp-1">
            {product.title}
          </h5>
          <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className={`w-4 h-4 ${
                  product.rating.rate < 0.5
                    ? "text-gray-200"
                    : "text-yellow-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${
                  product.rating.rate < 1.5
                    ? "text-gray-200"
                    : "text-yellow-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${
                  product.rating.rate < 2.5
                    ? "text-gray-200"
                    : "text-yellow-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${
                  product.rating.rate < 3.5
                    ? "text-gray-200"
                    : "text-yellow-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className={`w-4 h-4 ${
                  product.rating.rate < 4.5
                    ? "text-gray-200"
                    : "text-yellow-300"
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3">
              {product.rating.rate.toFixed(1)}
            </span>
          </div>
        </div>
      </Link>
      <div className="flex items-center justify-between px-4 pb-4">
        <span className="text-xl sm:text-3xl font-bold text-gray-900 ">
          ${product.price.toFixed(2)}
        </span>
        <VaulDrawer
          product={product}
        >
          <button
            className="text-white transition-colors relative z-25 flex flex-row gap-2 bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs sm:text-sm px-4 -mr-2 -mb-2 sm:px-4 py-4 sm:py-4 text-center"
          >
            <ShoppingCartSimpleIcon size={20} />
          </button>
        </VaulDrawer>
      </div>
    </div>
  );
}
