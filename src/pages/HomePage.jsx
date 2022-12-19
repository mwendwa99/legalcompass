import {
  Carousel,
  Banner,
  SeekJustice,
  Partners,
  Card,
  Statistics,
} from "../components";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { background } from "../assets";

const banner = {
  title: "united in vision & mission",
  description: `We are a non-profit organization that promotes public understanding of Kenya's legal and judicial systems.
   We provide free legal advice and help through the courts. We want Kenyans to know where they can go to obtain justice.`,
  button: "Get Involved",
  divider: true,
};

const HomePage = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <img src={background} alt="background" className="background" />
      <Carousel />
      <Banner banner={banner} />
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
    </>
  );
};

export default HomePage;
