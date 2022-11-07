import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import CustomButton from "./Button";

export default function Banner() {
  return (
    <Box>
      <Container>
        <Typography variant="h1">THIS IS A BANNER</Typography>
        <Divider />
        <CustomButton title={"Get Involved"} />
      </Container>
    </Box>
  );
}
