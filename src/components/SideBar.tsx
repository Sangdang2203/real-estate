"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InfoIcon from "@mui/icons-material/Info";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ParkIcon from "@mui/icons-material/Park";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PaymentIcon from "@mui/icons-material/Payment";
import { Drawer, IconButton, Tooltip } from "@mui/material";
import Link from "next/link";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const sideBarItems = [
    {
      title: "Giới thiệu",
      url: "#introduction",
      icon: <InfoIcon color="primary" fontSize="small" />,
    },
    {
      title: "Vị trí",
      url: "#location",
      icon: <LocationOnIcon color="primary" fontSize="small" />,
    },
    {
      title: "Tiện ích",
      url: "#facilities",
      icon: <ParkIcon color="primary" fontSize="small" />,
    },
    {
      title: "Thanh toán",
      url: "#payment",
      icon: <PaymentIcon color="primary" fontSize="small" />,
    },
    {
      title: "Mặt bằng & Thiết kế",
      url: "#layout",
      icon: <ApartmentIcon color="primary" fontSize="small" />,
    },
    {
      title: "Liên hệ",
      url: "tel:0909751772",
      icon: <ContactPhoneIcon color="primary" fontSize="small" />,
    },
  ];

  const DrawerList = (
    <Box
      sx={{ minWidth: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {sideBarItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link href={item.url}>{item.title}</Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <Tooltip title="Menu">
          <MenuOpenIcon fontSize="medium" color="primary" />
        </Tooltip>
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
