import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { stats1, stats2, stats3, stats4 } from "../assets";

export default function SeekJustice() {
  return (
    <Grid container sx={{ p: 2 }}>
      <Grid item xs={6} sm={3} md={3} sx={{ pt: 2 }}>
        <Paper elevation={0}>
          <img height={"100%"} width={"100%"} src={stats1} alt="statistics" />
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3} md={3} sx={{ pt: 2 }}>
        <Paper elevation={0}>
          <img height={"100%"} width={"100%"} src={stats2} alt="statistics" />
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3} md={3} sx={{ pt: 2 }}>
        <Paper elevation={0}>
          <img height={"100%"} width={"100%"} src={stats3} alt="statistics" />
        </Paper>
      </Grid>
      <Grid item xs={6} sm={3} md={3} sx={{ pt: 2 }}>
        <Paper elevation={0}>
          <img height={"100%"} width={"100%"} src={stats4} alt="statistics" />
        </Paper>
      </Grid>
    </Grid>
  );
}
