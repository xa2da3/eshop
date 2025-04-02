import Dashboard from "../components/Dashboard";
import Mainlayout from "../layout/Mainlayout";
import LandingPage from "../pages/landingpage/LandingPage";
import Search from "../pages/search/Search";

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
];

export default routes;
