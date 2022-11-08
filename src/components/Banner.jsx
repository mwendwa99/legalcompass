import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import CustomButton from "./Button";

export default function Banner() {
  return (
    // <Box>
    <Box className="banner">
      <Stack sx={{ p: 2 }} direction={"row"} spacing={2}>
        <Typography variant="h1" color="grey" sx={{ width: "100%", p: 2 }}>
          united in <br /> vision & <br /> Mission
        </Typography>
        <Divider flexItem orientation="vertical" />
        <Stack direction="column" sx={{ p: 2 }}>
          <Typography variant="subtitle2" sx={{ color: "#000" }} gutterBottom>
            We are a non-profit organization that promotes public understanding
            of Kenya's legal and judicial systems. We provide free legal advice
            and help through the courts. We want Kenyans to know where they can
            go to obtain justice.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <CustomButton title={"Get Involved"} />
          </Box>
        </Stack>
      </Stack>
    </Box>
    // </Box>
  );
}
