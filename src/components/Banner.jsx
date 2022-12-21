import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import CustomButton from "./Button";

export default function Banner({ banner }) {
  return (
    <Fade in={true} timeout={1000}>
      <Grid
        container
        sx={{
          p: 2,
          m: 2,
          position: "relative",
          height: { xs: "100%", sm: 400, md: 300 },
        }}
        className="banner"
      >
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            align="center"
            variant="h1"
            component="h1"
            color="custom"
            sx={{ width: "100%", p: 2 }}
          >
            {banner.title}ww
          </Typography>
        </Grid>
        <Divider
          variant="middle"
          flexItem={banner.divider}
          orientation="vertical"
          sx={{ display: { xs: "none", sm: "none", md: "block" } }}
        />
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            sx={{
              textAlign: { xs: "justify", sm: "justify", md: "justify" },
              p: 2,
              width: "100%",
            }}
            gutterBottom
          >
            {banner.description}
          </Typography>
          <Box
            sx={{
              mt: 4,
              p: 2,
              display: { xs: "flex" },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <CustomButton title={banner.button} />
          </Box>
        </Grid>
      </Grid>
    </Fade>
  );
}
