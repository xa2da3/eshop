import { BsSave } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import {
  MdOutlineDashboard,
  MdOutlineYoutubeSearchedFor,
} from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { TiDocumentText } from "react-icons/ti";

export const sidebarItems = [
  {
    label: "Dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    label: "Search",
    icon: <IoMdSearch />,
  },
  {
    label: "Saved Cases",
    icon: <BsSave />,
  },
  {
    label: "Recent Searches",
    icon: <MdOutlineYoutubeSearchedFor />,
  },
];

export const sidebarTools = [
  {
    label: "Case Analyzer",
    icon: <TbBrandGoogleAnalytics />,
  },
  {
    label: "Document Generator",
    icon: <TiDocumentText />,
  },
  {
    label: "Legal Calendar",
    icon: <CiCalendarDate />,
  },
];
