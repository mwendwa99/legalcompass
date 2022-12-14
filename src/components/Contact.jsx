import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Fade from "@mui/material/Fade";
import { toast } from "react-toastify";
import { logoLarge } from "../assets";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {"Copyright © "}
      {new Date().getFullYear()}
      <Link
        color="inherit"
        href="https://legalcompass.netlify.app/"
        target={"_blank"}
      >
        {" "}
        LegalCompass
      </Link>
    </Typography>
  );
}

function Credit() {
  return (
    <Typography variant="body2" color="text.primary" align="center">
      {"Site by "}
      <Link
        color="inherit"
        href="https://www.linkedin.com/in/brian-mwendwa-25326a173/"
        target={"_blank"}
        sx={{ fontSize: 14 }}
      >
        {"Brian Mwendwa"}
      </Link>
    </Typography>
  );
}

export default function Contact() {
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(() => {
      return data.get("email");
    });
  };
  const notify = () =>
    email ? toast(`Email sent as ${email}`) : toast("No email input");

  return (
    <Fade in={true} timeout={1000}>
      <Grid container sx={{ p: 2 }} className="contact">
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ backgroundColor: "#D9D9D9", p: 5 }}>
            <Container component="main" maxWidth="xs">
              <Typography variant="h2" color="text.secondary">
                Reach out to us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <TextField
                    margin="normal"
                    fullWidth
                    id="name"
                    label="Name"
                    name="name"
                    variant="standard"
                    inputProps={{ style: { color: "#01244c" } }}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    variant="standard"
                    inputProps={{ style: { color: "#01244c" } }}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="subject"
                    label="Subject"
                    type="subject"
                    id="subject"
                    variant="standard"
                    inputProps={{ style: { color: "#01244c" } }}
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="message"
                    label="Message"
                    type="message"
                    id="message"
                    variant="standard"
                    inputProps={{ style: { color: "#01244c" } }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={notify}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 5,
              minHeight: "100%",
            }}
          >
            <Typography variant="h3" align="center" gutterBottom>
              If you would like to speak with someone directly
            </Typography>
            <Typography variant="h3" align="center" gutterBottom>
              Give us a Call
            </Typography>
            <br />
            <Typography variant="h3" align="center" gutterBottom>
              {" "}
              020-XXXXXXX 07-XXX-XXXXX{" "}
            </Typography>
            <img
              src={logoLarge}
              alt="logoLarge"
              height={"100%"}
              width={"100%"}
            />
          </Box>
        </Grid>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Copyright sx={{ mt: 2, mb: 2 }} />
          <Credit />
        </Box>
      </Grid>
    </Fade>
  );
}
