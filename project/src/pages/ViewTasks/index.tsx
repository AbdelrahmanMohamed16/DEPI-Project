import { Box, Container, Grid, Grid2, Typography } from "@mui/material";
import React from "react";
import Sidebar from "../../components/LeftSidebar";
import Navbar from "../../components/Navbar";
import RightSidebar from "../../components/RightSidebar";
// function GridItem(props: any) {
//   return (
//     <Grid item md={3}>
//       {props.children}
//     </Grid>
//   );
// }

export default function ViewTasks() {
  return (
    <Grid2 container sx={{ width: "100%", background: "#F6F8FD" }}>
      <Sidebar />
      <Grid2 size={{ xs: 12, sm: 7.6 }} offset={{ xs: 0, sm: 2.2 }} mt={3}>
        <Navbar />
      </Grid2>
      <RightSidebar />
    </Grid2>
  );
}
