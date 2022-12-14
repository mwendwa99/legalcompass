import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import Lottie from "lottie-react";
import { notfound } from "../assets";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={6}>
            <Typography variant="h1">404</Typography>
            <Typography variant="h6">
              Sorry! the page you’re looking for doesn’t exist or is in
              development. Come back to check it out later. Thank you!
            </Typography>
            <Button
              component={NavLink}
              to="/"
              variant="contained"
              color="secondary"
              sx={{ mt: 2 }}
            >
              Back Home
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Lottie animationData={notfound} loop={true} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
