import { BreadCrumbs, Calendar, Card } from "../components";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { background } from "../assets";
import { useSelector, useDispatch } from "react-redux";

const cardContent = {
  title: "Name of Event",
  description: "This is a description of the event",
  button: "Register",
  date: "2023-01-11",
  image: background,
};

export default function Trainings() {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  console.log("events", events);
  return (
    <div>
      <BreadCrumbs />
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <Calendar events={events} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container>
              {
                // This is a conditional rendering of the card
                events.length > 0 &&
                  events.map((event) => (
                    <Grid item xs={12} md={6}>
                      <Card content={event} />
                    </Grid>
                  ))
              }
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
