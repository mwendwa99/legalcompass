import {
  Nav,
  Carousel,
  Banner,
  SeekJustice,
  Partners,
  Card,
  Statistics,
  Contact,
} from "../components";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { background } from "../assets";

const HomePage = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      {/* <Nav /> */}
      <img src={background} alt="background" className="background" />
      <Carousel />
      <Banner />
      <SeekJustice />
      <Partners />
      <Grid container className="card-container">
        <Grid item xs={12} sm={12} md={12} sx={{ pt: 2 }}>
          <Typography
            align="center"
            variant="h1"
            gutterBottom
            className="card-title"
          >
            Featured Articles
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card />
        </Grid>
      </Grid>
      <Statistics />
      <Contact />
    </>
  );
};

export default HomePage;
