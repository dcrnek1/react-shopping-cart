import App from "./App";
import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Products from "./pages/Products";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {index: true, element: <App />},
      {path: "/products", element: <Products />},
      {path: "/products/:id", element: <ProductDetailPage />},
      {path: "*", element: <ErrorPage />},
    ],
  },
];

export default routes;