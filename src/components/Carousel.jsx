import React from "react";
import Carousel from "react-material-ui-carousel";
import { Typography, Box } from "@mui/material";
import CustomButton from "./Button";
import { leftArrow, rightArrow } from "../assets";

export default function Example(props) {
  var items = [
    {
      name: "How we can help you",
      description:
        "Justice shouldn’t be difficult to access. Yet, day after day many roam the corridors of courtrooms and government offices with no clear direction on how to get their desired remedy. Legal Compass is here to help you navigate your quest for justice! Figuring out what legal help you need can be difficult! In an ideal setting you should get a lawyer to help you. At Legal Compass, we understand that not everyone has access to quality legal advice. We aim to keep you abreast with the best legal advice and where necessary match you with pro bono lawyers and mediators willing to assist you in your pursuit of justice.",
    },
    {
      name: "Government Institutions",
      description:
        "Did you know that the Constitution of Kenya and subsequent legislations have created several Independent Offices that are charged with the duty of ensuring realization of human rights?  Here are a list of Government Institutions that offer specialized services that may be useful to you;",
    },
    {
      name: "Civil Matters",
      description:
        "Civil matters refer to legal dispute between two people and or companies. This includes disputes between an employee and the employer; land and property matters; family succession; marriages, and so on. These matters can usually be resolved by agreement between the parties concerned, professional mediation or arbitration if the parties cannot agree, and finally through a court process. In many civil matters, it may be to your advantage to find a resolution that leaves both parties satisfied with the outcome and preserves the relationship. Alternative dispute resolution mechanisms such as mediation are highly encouraged.",
    },
    {
      name: "Criminal Matters",
      description:
        "If a crime has been committed against you, here are the steps you need to take: Report to the nearest Police Station and ensure that the matter has been recorded in the Occurrence Book (OB). Make sure you retain the OB number. If the matter involves some kind of harm or assault to you, you should be given a P3 form and visit the nearest hospital. The Police will carry out investigations and will record witness statements, including yours. (If the Police delay in carrying out investigations, you can raise a complaint with the Ombudsman) Should the Police consider that there is sufficient evidence they will recommend that the matter be prosecuted in Court .  The  DPP ( Directorate of Public Prosecution) decides if a matter will be prosecuted in Court. You should avail yourself as a witness to give evidence in Court as directed by the Prosecution Counsel.",
    },
  ];

  return (
    <div style={{ margin: "10rem 3rem" }}>
      <Carousel
        NextIcon={<img src={rightArrow} height={50} width={50} />}
        PrevIcon={<img src={leftArrow} height={50} width={50} />}
        navButtonsAlwaysVisible
        style={{ height: 500 }}
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
    </div>
  );
}

function Item(props) {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "right",
        alignContent: "flex-end",
        ml: 40,
        mr: 10,
        height: 400,
      }}
    >
      <Box>
        <Typography variant="h1" align="right" gutterBottom>
          {props.item.name}
        </Typography>
        <Typography variant="subtitle1" align="justify" gutterBottom>
          {props.item.description}
        </Typography>
      </Box>
      <Box style={{ position: "absolute", bottom: 0, right: 0 }}>
        <CustomButton type="secondary" title="Learn More" strong={true} />
      </Box>
    </Box>
  );
}
