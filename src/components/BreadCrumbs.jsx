import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  // console.info("You clicked a breadcrumb.");
}

export default function IconBreadcrumbs() {
  const currentLocation = useLocation();
  // console.log(currentLocation);
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
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Home
          </Link>
          <Link
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
            component={NavLink}
            to={currentLocation.pathname}
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Who We Are
          </Link>
        </Breadcrumbs>
      </Box>
    </Box>
  );
}
