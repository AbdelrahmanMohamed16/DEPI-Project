import { Box, Container, Grid, Grid2, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

// function GridItem(props: any) {
//   return (
//     <Grid item md={3}>
//       {props.children}
//     </Grid>
//   );
// }

export default function ViewTasks() {
  return (
    <Grid2 container>
      <Sidebar />
      <Grid2 size={{ xs: 12, sm: 6 }} offset={{ xs: 0, sm: 3 }} mt={3}>
        <Navbar />
      </Grid2>
    </Grid2>
  );
}
