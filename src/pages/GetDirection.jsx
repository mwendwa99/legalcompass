import { Box, Typography, Container } from "@mui/material";
import { Stepper, BreadCrumbs } from "../components";

const GetDirection = () => {
  return (
    <Box>
      <BreadCrumbs />
      <Container maxWidth="lg">
        <Typography
          align="center"
          sx={{ fontWeight: 300 }}
          variant="h2"
          component="h2"
          gutterBottom
        >
          Here we will be able to assist you in navigating the corridors of
          justice.
          <br /> Just follow these simple steps!
        </Typography>
        <Stepper />
      </Container>
    </Box>
  );
};

export default GetDirection;
