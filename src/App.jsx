import "./App.css";
import Cover from "./components/Cover";
import { useNavigate } from "react-router-dom";
import TopProductsBanner from "./components/TopProductsBanner";
import LazyImage from "./utils/SmartImage";
import { useFiltersState } from "./contexts/filterContext";

function App() {
  const categoriesBrowse = [
    {
      name: "Men",
      path: "men's clothing",
      imageUrl: "assets/mens.jpg",
      overlay: false,
    },
    {
      name: "Women",
      path: "women's clothing",
      imageUrl: "assets/womens2.jpg",
      overlay: false,
    },
    {
      name: "Jewelery",
      path: "jewelery",
      imageUrl: "assets/jewelery.jpg",
      overlay: false,
    },
    {
      name: "All products",
      path: "",
      imageUrl: "assets/allproducts.jpg",
      overlay: true,
    },
  ];

  const { setCategories } = useFiltersState();
  const navigate = useNavigate();

  function categoryClickHandler(categoryPath) {
    setCategories((prev) => {
      return prev.map((cat) => {
        if (cat.path === categoryPath) {
          return { ...cat, selected: true };
        } else {
          return { ...cat, selected: false };
        }
      });
    });

    navigate("/products");
  }

  return (
    <div>
      <Cover />
      <div className="max-w-7xl m-auto p-2 z-0">
        <h1 className="text-xl font-bold sm:text.2xl uppercase py-2 mb-2 relative w-max">
          <span className="z-2 relative pl-2">Browse by category</span>
          <div className="absolute bottom-1 h-1 w-full bg-primary">
            <div className="h-3 w-2 z-1 bg-white absolute -top-1.5 -left-0.5 rotate-45 object-contain"></div>
            <div className="h-3 w-2 z-1 bg-white absolute -top-0.5 -right-1.5 rotate-45 object-contain"></div>
          </div>
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5">
          {categoriesBrowse.map((category, index) => {
            return (
              <div
                onClick={() => categoryClickHandler(category.path)}
                className="w-full h-70 sm:h-150 relative"
                key={index}
              >
                <LazyImage
                  src={category.imageUrl}
                  className={`h-full w-full transition ${
                    category.overlay ? "brightness-40" : ""
                  }`}
                  alt=""
                  object="object-cover"
                />
                <div className="absolute top-0 left-0 w-38 bg-black/20 hover:bg-black/10 w-full h-full text-black text-xs sm:text-md font-medium uppercase flex flex-row justify-center items-start gap-2 p-2">
                  <div className="uppercase font-semibold text-lg sm:text-3xl text-center text-gray-100/80 mt-5">
                    {category.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <h1 className="text-xl font-bold sm:text.2xl uppercase py-2 mb-2 relative w-max mt-4">
          <span className="z-2 relative">Top products</span>
          <div className="absolute bottom-1 h-1 w-full bg-primary">
            <div className="h-3 w-2 z-1 bg-white absolute -top-1.5 -left-0.5 rotate-45 object-contain"></div>
            <div className="h-3 w-2 z-1 bg-white absolute -top-0.5 -right-1.5 rotate-45 object-contain"></div>
          </div>
        </h1>
        <TopProductsBanner />
      </div>
    </div>
  );
}

export default App;
