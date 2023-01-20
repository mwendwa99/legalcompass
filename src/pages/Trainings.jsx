import { BreadCrumbs, Calendar, Card } from "../components";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { background } from "../assets";

const cardContent = {
  title: "Name of Event",
  description: "This is a description of the event",
  button: "Register",
  date: "2023-01-11",
  image: background,
};

export default function Trainings() {
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Calendar date={cardContent.date} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container sx={{ overflow: "auto" }}>
              <Grid item xs={12} md={6}>
                <Card content={cardContent} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card content={cardContent} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card content={cardContent} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Card content={cardContent} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
