import {
  Nav,
  Carousel,
  Banner,
  SeekJustice,
  Partners,
  Card,
} from "../components";
import Grid from "@mui/material/Grid";
import { background } from "../assets";

const HomePage = () => {
  return (
    <>
      <Nav />
      <img src={background} alt="background" className="background" />
      <Carousel />
      <Banner />
      <SeekJustice />
      <Partners />
      <Grid container className="card-container">
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
    </>
  );
};

export default HomePage;
