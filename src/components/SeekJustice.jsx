import { Box, Typography, Grid } from "@mui/material";
import Button from "./Button";
import { justice } from "../assets";

export default function SeekJustice() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={8} sx={{ p: { sm: 5, md: 10 } }}>
          <Typography
            variant="h1"
            align="left"
            gutterBottom
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            Seek Justice
          </Typography>
          <Typography
            variant="body1"
            align="left"
            gutterBottom
            sx={{ textAlign: { xs: "justify", md: "left" } }}
          >
            Our Advocates have extensive experience in Commercial Law and Civil
            Law practice, backed up by both top-tier law firm experience and
            in-house experience, as well as a long-term consultative undertaking
            providing legal advice and transactional support in commercial law
            to a global foundation with operations in Kenya.{" "}
          </Typography>
          <Typography variant="body1" align="left">
            At Legal Compass we seek to expand access to justice by:
          </Typography>
          <ol style={{ fontSize: 18 }}>
            <li>
              Providing basic legal information and guidance on common aspects
              of law;
            </li>
            <li>
              Partnering with pro-bono lawyers and mediators to provide legal
              advice and service (This program is limited to the most deserving
              cases)
            </li>
            <li>
              Providing basic information regarding pro-bono organisations that
              can help you in your quest for justice.
            </li>
          </ol>
          <Box sx={{ pt: 2 }}>
            <Button title="Find A Lawyer" type={"secondary"} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <img
            src={justice}
            style={{ width: "100%", height: "100%" }}
            alt="justice"
          />
        </Grid>
      </Grid>
    </div>
  );
}
