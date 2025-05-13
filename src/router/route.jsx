import Dashboard from "../components/Dashboard";
import Mainlayout from "../layout/Mainlayout";
import LandingPage from "../pages/landingpage/LandingPage";
import Search from "../pages/search/Search";
import LoadDocument from "../pages/LoadDocument/LoadDocument";
import LandingPageV1 from "../pages/LandingPageV1/LandingPageV1";
import Login from "../pages/Auth/Login/Login";

const routes = [
  {
    path: "/",
    element: <LandingPageV1 />,
  },
  {
    path: "/landing",
    element: <LandingPageV1/>,
  },
  {
    path: "/login",
    element: <Login/>,
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
