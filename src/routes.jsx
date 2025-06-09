import App from "./App";
import AppLayout from "./layouts/AppLayout";
import CartPage from "./pages/CartPage";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {index: true, element: <App />},
      {path: "/products", element: <ProductsPage />},
      {path: "/products/:productId", element: <ProductDetailPage />},
      {path: "/cart", element: <CartPage />},
      {path: "*", element: <ErrorPage />},
    ],
  },
];

export default routes;