import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Tooltip, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

import { logo, icon } from "../assets";
import CustomButton from "./Button";

const drawerWidth = 240;
const navItems = [
  "Home",
  "Who We Are",
  "Trainings & Events",
  "Resources",
  "Get Directions",
];

// remove all spaces from a given string and return the resulting string in small caps:
function cleanLinks(str) {
  // Check if the string is empty
  if (!str) return "";

  // Replace all spaces in the string with an empty string
  const strWithoutSpaces = str.replace(/\s/g, "");

  // Convert the string to lowercase
  const strInSmallCaps = strWithoutSpaces.toLowerCase();

  // Return the string in small caps
  return strInSmallCaps;
}

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <IconButton sx={{ p: 0 }}>
        <img src={icon} alt="icon" />
      </IconButton>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <NavLink
              style={{ color: "inherit", textDecoration: "inherit" }}
              to={cleanLinks(item) === "home" ? "/" : cleanLinks(item)}
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Tooltip title="Home">
              <NavLink
                to={"/"}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <IconButton sx={{ p: 0 }}>
                  <img src={logo} alt="logo" height="100%" width="100%" />
                </IconButton>
              </NavLink>
            </Tooltip>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {navItems.map((item, index) => (
              <Link
                key={item}
                style={{ color: "#fff" }}
                component="button"
                variant="body2"
                onClick={() => {
                  // console.info("I'm a button.");
                }}
              >
                <ListItem>
                  <NavLink
                    to={index === 0 ? "/" : cleanLinks(item)}
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <Typography variant="h5">{item}</Typography>
                  </NavLink>
                </ListItem>
              </Link>
            ))}
          </Box>
          <CustomButton type="secondary" title="Volunteer" strong={true} />
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* add box with margin to fit nav component */}
      <Box sx={{ flexGrow: 1, mt: 10 }} />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
