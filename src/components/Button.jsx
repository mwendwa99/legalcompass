import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicButtons({ type, title, strong }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" title={title} color={type}>
        <Typography sx={{ fontWeight: strong ? "bold" : "" }}>
          {title}
        </Typography>
      </Button>
    </Stack>
  );
}
