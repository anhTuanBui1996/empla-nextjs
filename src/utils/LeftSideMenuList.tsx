import HomeIcon from "@mui/icons-material/Home";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export const LeftSideMenuList: { personalDefinition: Menu[]; dataDefinition: Menu[] } =
  {
    // Personal definition
    personalDefinition: [
      {
        name: "Dashboard",
        urlPattern: "/",
        icon: <HomeIcon fontSize="small" />
      },
      {
        name: "Check-in",
        urlPattern: "/checkin",
        icon: <AssignmentTurnedInIcon fontSize="small" />
      },
    ],
    // Data definition
    dataDefinition: [
      {
        name: "Staff",
        urlPattern: "/staff",
        icon: <PeopleAltIcon fontSize="small" />
      },
    ],
  };

type Menu = {
  name: string;
  urlPattern: string;
  icon: any;
};
