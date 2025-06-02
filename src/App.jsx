import "./App.css";
import Cover from "./components/Cover";
import { Link } from "react-router-dom";

function App() {
  const categories = [
    {
      name: "Men",
      path: "/products?category=men",
      imageUrl: "src/assets/mens.jpg",
      overlay: false,
    },
    {
      name: "Women",
      path: "/products?category=women",
      imageUrl: "src/assets/womens2.jpg",
      overlay: false,
    },
    {
      name: "Jewelery",
      path: "/products?category=jewelery",
      imageUrl: "src/assets/jewelery.jpg",
      overlay: false,
    },
    {
      name: "All products",
      path: "/products",
      imageUrl: "src/assets/allproducts.jpg",
      overlay: true,
    },
  ];

  return (
    <>
      <Cover />
      <div className="max-w-7xl m-auto p-2 z-0">
        <h1 className="text-xl sm:text.2xl uppercase py-2">
          Browse by category
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {categories.map((category, index) => {
            return (
              <Link key={index} to={category.path} className="w-full h-70 sm:h-150 relative">
                <img
                  src={category.imageUrl}
                  className={`object-cover h-full w-full transition ${category.overlay ? "brightness-40 hover:brightness-30" : "hover:brightness-80"}`}
                  alt=""
                />
                {/* {!category.overlay && (
                  <div className="absolute bottom-3 right-3 w-38 bg-white/100 text-black text-xs sm:text-md font-medium uppercase flex flex-row justify-between items-center gap-2 p-2">
                  <div>{category.name}</div>
                  <div className="mb-0.5">{`>>`}</div>
                </div>
                )} */}
                  <div className="absolute top-0 left-0 w-38 bg-black/20 hover:bg-black/30 w-full h-full text-black text-xs sm:text-md font-medium uppercase flex flex-row justify-center items-start gap-2 p-2">
                  <div className="uppercase font-semibold text-lg sm:text-3xl text-center text-gray-100/80 mt-5">{category.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
