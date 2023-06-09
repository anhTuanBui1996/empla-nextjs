import * as React from "react";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { LeftSideMenuList } from "@/utils/LeftSideMenuList";
import Link from "next/link";

export default function LeftSideMenu({ isMenuOpen }: { isMenuOpen: boolean }) {
  return (
    <Paper
      sx={{
        width: 240,
        height: "100%",
        maxWidth: "100%",
        position: "absolute",
        left: isMenuOpen ? 0 : -240,
        transition: "left .5s",
        paddingY: "8px",
        borderRadius: 0,
      }}
    >
      <MenuList>
        {LeftSideMenuList.personalDefinition.map((menuItem, index) => (
          <Link href={menuItem.urlPattern} key={index}>
            <MenuItem>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText>{menuItem.name}</ListItemText>
            </MenuItem>
          </Link>
        ))}
        <Divider className="my-2" />
        {LeftSideMenuList.dataDefinition.map((menuItem, index) => (
          <Link href={menuItem.urlPattern} key={index}>
            <MenuItem>
              <ListItemIcon>{menuItem.icon}</ListItemIcon>
              <ListItemText>{menuItem.name}</ListItemText>
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Paper>
  );
}
