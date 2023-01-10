import { BreadCrumbs, Calendar } from "../components";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

export default function Trainings() {
  let eventDate = "2023-01-11";
  return (
    <div>
      <BreadCrumbs />
      <Container
        maxWidth="lg"
        sx={{ p: 2 }}
        // style={{ display: "grid", placeItems: "center", width: "500px" }}
      >
        <Paper elevation={3}>
          <Calendar date={eventDate} />
        </Paper>
      </Container>
    </div>
  );
}
