import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/searchResults",
    element: <SearchPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
