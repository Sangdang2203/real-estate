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
import SectionIcon from "@/shared/assets/icons/Section";
import { Button, Drawer, Tooltip } from "@mui/material";
import PopupForm from "./PopupForm";

const sideBarItems = [
  {
    title: "Giới thiệu",
    url: "#introduction",
    icon: <InfoIcon className="text-[#8b5a3e]" fontSize="small" />,
  },
  {
    title: "Vị trí",
    url: "#location",
    icon: <LocationOnIcon className="text-[#8b5a3e]" fontSize="small" />,
  },
  {
    title: "Tiện ích",
    url: "#facilities",
    icon: <ParkIcon className="text-[#8b5a3e]" fontSize="small" />,
  },
  {
    title: "Thanh toán",
    url: "#payment",
    icon: <PaymentIcon className="text-[#8b5a3e]" fontSize="small" />,
  },
  {
    title: "Mặt bằng & Thiết kế",
    url: "#layout",
    icon: <ApartmentIcon className="text-[#8b5a3e]" fontSize="small" />,
  },
  {
    title: "Liên hệ",
    url: "tel:0909751772",
    icon: <ContactPhoneIcon className="text-[#8b5a3e]" fontSize="small" />,
  },
];

const SideBar = () => {
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
              <Link href={item.url} className="text-[#8b5a3e] uppercase">
                {item.title}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <div className="my-4 mx-2">
          <PopupForm />
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Tooltip title="Menu">
        <Button onClick={toggleDrawer(true)} startIcon={<SectionIcon />}>
          Section
        </Button>
      </Tooltip>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default SideBar;
