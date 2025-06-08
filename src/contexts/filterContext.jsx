import { createContext, useContext, useState } from "react";
const FiltersContext = createContext();
export function useFiltersState() { return useContext(FiltersContext); }


export function FiltersProvider({ children }) {
  const [sort, setSort] = useState("Asc");
  const [categories, setCategories] = useState(
    [
    {
      name: "All products",
      path: "",
      selected: true,
    },
    {
      name: "Men",
      path: "men's clothing",
      selected: false,
    },
    {
      name: "Women",
      path: "women's clothing",
      selected: false,
    },
    {
      name: "Jewelery",
      path: "jewelery",
      selected: false,
    },
    {
      name: "Electronics",
      path: "electronics",
      selected: false,
    },
  ]
  );
  return (
    <FiltersContext.Provider value={{ sort, setSort, categories, setCategories }}>
      {children}
    </FiltersContext.Provider>
  );
}