"use client";
import * as React from "react";
import Link from "next/link";
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
import SectionIcon from "@/shared/assets/icons/Section";

const sideBarItems = [
  {
    title: "Giới thiệu",
    url: "#introduction",
    icon: <InfoIcon className="text-[#dec4a7]" fontSize="small" />,
  },
  {
    title: "Vị trí",
    url: "#location",
    icon: <LocationOnIcon className="text-[#dec4a7]" fontSize="small" />,
  },
  {
    title: "Tiện ích",
    url: "#facilities",
    icon: <ParkIcon className="text-[#dec4a7]" fontSize="small" />,
  },
  {
    title: "Thanh toán",
    url: "#payment",
    icon: <PaymentIcon className="text-[#dec4a7]" fontSize="small" />,
  },
  {
    title: "Mặt bằng & Thiết kế",
    url: "#layout",
    icon: <ApartmentIcon className="text-[#dec4a7]" fontSize="small" />,
  },
  {
    title: "Liên hệ",
    url: "tel:0909751772",
    icon: <ContactPhoneIcon className="text-[#dec4a7]" fontSize="small" />,
  },
];

export default function SideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        minWidth: 250,
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {sideBarItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <Link href={item.url} className="text-[#dec4a7] uppercase">
                {item.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Tooltip title="Menu">
        <IconButton onClick={toggleDrawer(true)}>
          <SectionIcon />
        </IconButton>
      </Tooltip>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
