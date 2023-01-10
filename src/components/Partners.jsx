import { Grid, Box, Typography } from "@mui/material";
import { partner } from "../assets";

const Partners = () => {
  return (
    <Box sx={{ backgroundColor: "#D9D9D9", width: "100%", p: 2 }}>
      <Typography
        variant="h2"
        sx={{
          color: "#01244C",
          textAlign: { xs: "center", sm: "center", md: "left" },
          p: 2,
          fontWeight: "bold",
        }}
      >
        Our Partners
      </Typography>
      <Grid container>
        <Grid item xs={3} sm={3} md={3}>
          <img
            src={partner}
            alt="partner"
            style={{ maxWidth: "100%", width: "300px", height: "100%" }}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <img
            src={partner}
            alt="partner"
            style={{ maxWidth: "100%", width: "300px", height: "100%" }}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <img
            src={partner}
            alt="partner"
            style={{ maxWidth: "100%", width: "300px", height: "100%" }}
          />
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
          <img
            src={partner}
            alt="partner"
            style={{ maxWidth: "100%", width: "300px", height: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Partners;
