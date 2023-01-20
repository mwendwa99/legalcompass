import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomButton from "./Button";

export default function MediaCard({ content }) {
  return (
    <Box sx={{ m: 1 }}>
      <Card>
        <CardMedia component="img" image={content.image} alt="green iguana" />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            className="card-title"
            component="div"
          >
            {content.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {content.description}
          </Typography>
          {
            // This is a conditional rendering of the date
            content.date && (
              <Typography variant="body2" color="text.secondary">
                {content.date}
              </Typography>
            )
          }
        </CardContent>
        <CardActions>
          <CustomButton type="secondary" title={content.button} />
        </CardActions>
      </Card>
    </Box>
  );
}
