import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Button, Card, Divider, Menu, MenuItem } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate=useNavigate();
  const { auth } = useSelector((store) => store);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handlerNavigate = (item) => {
    if(item.title === "Profile"){
      navigate(`/Profile/${auth.user?.id}`)
    }
  }

  return (
    <Card className="card h-screen flex flex-col">
      <div className="flex-1 py-5 px-5">
        <span className="logo font-bold text-xl">DUNGLE_SOCIAL</span>
        <div className="space-y-8 mt-4">
          {navigationMenu.map((item, index) => (
            <div
              onClick={() => handlerNavigate(item)}
              key={index}
              className="cursor-pointer flex space-x-3 items-center"
            >
              {item.icon}
              <p className="text-xl">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      <div className="py-5 px-5 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Avatar src="https://cdn.pixabay.com/photo/2024/07/08/05/41/girl-8880144_1280.png" />
          <div>
            <p className="font-bold">
              {auth.user?.firstName + " " + auth.user?.lastName}
            </p>
            <p className="opacity-70">
              @{auth.user?.firstName.toLowerCase() +
                auth.user?.lastName.toLowerCase()}
            </p>
          </div>
        </div>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MoreVertIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </Card>
  );
};

export default Sidebar;
