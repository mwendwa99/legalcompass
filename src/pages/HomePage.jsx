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
import Fade from "@mui/material/Fade";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { background, cardImage } from "../assets";

const banner = {
  title: "united in vision & mission",
  description: `We are a non-profit organization that promotes public understanding of Kenya's legal and judicial systems.
   We provide free legal advice and help through the courts. We want Kenyans to know where they can go to obtain justice.`,
  button: "Get Involved",
  divider: true,
};

const cardContent = {
  title: "Referral Organisations",
  description: `There are a several organisations that help people handle particular elements of legal action. Some provide direct legal representation, others advice on various areas, others cater to particular demographics.`,
  button: "Learn More",
  image: cardImage,
};

const HomePage = () => {
  return (
    <>
      <ToastContainer position="top-center" />
      <Fade in={true} timeout={1000}>
        <img
          src={background}
          height="720px"
          width="1280px"
          alt="background"
          className="background"
        />
      </Fade>
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
          <Card content={cardContent} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card content={cardContent} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card content={cardContent} />
        </Grid>
      </Grid>
      <Statistics />
    </>
  );
};

export default HomePage;
