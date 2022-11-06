import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ type, title, strong }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" title={title} color={type}>
        {title}
      </Button>
    </Stack>
  );
}
