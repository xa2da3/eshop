import Dashboard from "../components/Dashboard";
import Mainlayout from "../layout/Mainlayout";
import LandingPage from "../pages/landingpage/LandingPage";
import Search from "../pages/search/Search";
import LoadDocument from "../pages/LoadDocument/LoadDocument";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/search",
    element: <Mainlayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        index: true,
        element: <Search />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
  {
    path: "/html",
    element: <Mainlayout />,
    children: [
      {
        path: "",
        element: <LoadDocument />,
      },
    ],
  },
];

export default routes;
