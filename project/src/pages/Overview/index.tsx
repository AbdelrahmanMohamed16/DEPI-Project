import { Grid2, Typography } from "@mui/material";
import React from "react";

export default function Overview() {
  return (
    <Grid2 container mt={2} mx={3}>
      <Grid2>
        <Typography variant="h3" fontWeight={"bold"}>
          Overview
        </Typography>
      </Grid2>
    </Grid2>
  );
}
