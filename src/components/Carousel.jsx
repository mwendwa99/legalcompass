import React from "react";
import Carousel from "react-material-ui-carousel";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CustomButton from "./Button";
import { leftArrow, rightArrow } from "../assets";

export default function Example(props) {
  var items = [
    {
      name: "How we can help you",
      description:
        "Access to justice shouldn't be challenging. But numerous people wander the halls of courts and government buildings every day without knowing how to obtain the desired remedy. You can use Legal Compass to guide you through your search for justice!",
    },
    {
      name: "Government Institutions",
      description:
        "Did you know that the Constitution of Kenya and subsequent legislations have created several Independent Offices that are charged with the duty of ensuring realization of human rights?  Here are a list of Government Institutions that offer specialized services that may be useful to you;",
    },
    {
      name: "Civil Matters",
      description:
        "Legal disputes involving two people or businesses are referred to as civil matters. This covers disagreements between an employee and their employer, issues involving land and property, family succession, marriages, and other things.",
    },
    {
      name: "Criminal Matters",
      description:
        "If a crime has been committed against you, here are the steps you need to take: Report to the nearest Police Station and ensure that the matter has been recorded in the Occurrence Book (OB). Make sure you retain the OB number.",
    },
  ];

  return (
    <Container maxWidth="lg" style={{ margin: "10rem 0 0 0" }}>
      <Carousel
        animation="slide"
        NextIcon={
          <img
            src={rightArrow}
            height={50}
            width={50}
            className="carouselBtn"
          />
        }
        PrevIcon={
          <img src={leftArrow} height={50} width={50} className="carouselBtn" />
        }
        navButtonsAlwaysVisible
        swipe
        indicators={false}
        navButtonsProps={{
          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
          style: {
            backgroundColor: "transparent",
            borderRadius: 0,
          },
        }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Container>
  );
}

function Item(props) {
  return (
    <Grid container>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "right",
          alignContent: "flex-end",
          ml: { xs: 0, sm: 0, md: 40 },
          mr: { xs: 0, sm: 0, md: 15 },
        }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h1" align="right" gutterBottom>
            {props.item.name}
          </Typography>
          <Typography
            sx={{ minHeight: 200 }}
            variant="body1"
            align="justify"
            gutterBottom
          >
            {props.item.description}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >
          <CustomButton type="secondary" title="Learn More" strong={true} />
        </Grid>
      </Box>
    </Grid>
  );
}
