import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function BasicButtons({ type, title, strong, action }) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" title={title} color={type} onClick={action}>
        {title}
      </Button>
    </Stack>
  );
}
