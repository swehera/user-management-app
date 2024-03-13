import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/Header.jsx";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import AddingUser from "./components/AddingUser.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/adding",
        element: <AddingUser />,
      },
      {
        path: "/update/:uid",
        element: <UpdateUser />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
