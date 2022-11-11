import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomButton from "./Button";
import { cardImage } from "../assets";

export default function MediaCard() {
  return (
    <Box sx={{ p: 4 }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" image={cardImage} alt="green iguana" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            className="card-title"
            component="div"
          >
            Referral Organisations
          </Typography>
          <Typography variant="body2" color="text.secondary">
            There are a several organisations that help people handle particular
            elements of legal action. Some provide direct legal representation,
            others advice on various areas, others cater to particular
            demographics.
          </Typography>
        </CardContent>
        <CardActions>
          <CustomButton type="secondary" title={"Learn More"} />
        </CardActions>
      </Card>
    </Box>
  );
}
