import React from "react";
import { Container, Box, Grid, Typography, Fade } from "@mui/material";
import { BreadCrumbs, Banner } from "../components";

const banner = {
  title: "united in vision & mission",
  description: `We are a non-profit organization that promotes public understanding of Kenya's legal and judicial systems.
     We provide free legal advice and help through the courts. We want Kenyans to know where they can go to obtain justice.`,
  button: "Get Involved",
  divider: true,
};

export default function WhoWeAre() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <Box>
      <BreadCrumbs />
      <Container maxWidth="xl" sx={{ p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h1" align="left" gutterBottom>
              About Us
            </Typography>
            <Typography align="justify">
              Legal Compass is a Kenyan based NGO law firm that is dedicated to
              providing affordable and accessible legal services to marginalized
              and underserved communities. We believe that everyone deserves
              access to justice, and we are committed to using our skills and
              resources to promote social justice and equality. Our team
              consists of highly trained and experienced attorneys and legal
              professionals who are dedicated to providing top-quality legal
              services to our clients. We specialize in a wide range of areas,
              including human rights law, civil rights law, immigration law, and
              more. We work with individuals, families, and communities to help
              them navigate the complex legal system and advocate for their
              rights. We also provide pro bono legal services to those who
              cannot afford to pay for legal representation. At Legal Compass,
              we are driven by a deep commitment to social justice and equality.
              We believe that everyone deserves access to justice, and we are
              dedicated to using our skills and resources to make a positive
              impact in our community.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in={true} timeout={1000}>
              <img
                src="https://images.pexels.com/photos/4427431/pexels-photo-4427431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="justice"
                style={{
                  maxWidth: "100%",
                  width: "700px",
                  height: "100%",
                }}
              />
            </Fade>
          </Grid>
          <Grid
            sx={{ display: "flex", justifyContent: "center" }}
            item
            xs={12}
            md={12}
          >
            <Banner position={"relative"} banner={banner} />
          </Grid>
        </Grid>
        <Grid container sx={{ p: 2 }} spacing={3}>
          <Grid item xs={12} md={12}>
            <Typography variant="h1" align="center" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              To be recognized globally for our ethics, passion, and excellence
              in the practice of law.
            </Typography>
            <Typography variant="h1" align="center" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              To be the leading law firm in Kenya and the region, providing the
              highest quality legal services to our clients.
            </Typography>
            <Typography variant="h1" align="center" gutterBottom>
              Our Values
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              Excellence | Integrity | Innovation | Service
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
