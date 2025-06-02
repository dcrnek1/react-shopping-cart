import App from "./App";
import AppLayout from "./layouts/AppLayout";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {index: true, element: <App />},
      {path: "*", element: <ErrorPage />}
    ],
  },
];

export default routes;