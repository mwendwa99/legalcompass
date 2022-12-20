import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import {
  Event,
  Whatshot,
  Home,
  FolderSpecial,
  Directions,
} from "@mui/icons-material";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  // console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  const currentLocation = useLocation();

  // map current location to breadcrumb and icon
  const breadcrumbMap = {
    "/": {
      breadcrumb: "Home",
      icon: <Home sx={{ mr: 0.5 }} fontSize="inherit" />,
    },
    "/whoweare": {
      breadcrumb: "Who we are",
      icon: <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />,
    },
    "/trainings&events": {
      breadcrumb: "Trainings & Events",
      icon: <Event sx={{ mr: 0.5 }} fontSize="inherit" />,
    },
    "/resources": {
      breadcrumb: "Resources",
      icon: <FolderSpecial sx={{ mr: 0.5 }} fontSize="inherit" />,
    },
    "/getdirections": {
      breadcrumb: "Get Directions",
      icon: <Directions sx={{ mr: 0.5 }} fontSize="inherit" />,
    },
  };

  return (
    <Box
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/6077381/pexels-photo-6077381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      height={100}
      width={"100vw"}
    >
      <Box sx={{ p: 5 }} role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
            component={NavLink}
            to="/"
          >
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
            component={NavLink}
            to={currentLocation.pathname}
          >
            {/* get icon and name from breadcrumbMap */}
            {breadcrumbMap[currentLocation.pathname].icon}
            {breadcrumbMap[currentLocation.pathname].breadcrumb}
          </Link>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}
