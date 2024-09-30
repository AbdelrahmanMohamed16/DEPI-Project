import { Grid2 } from "@mui/material";
import LeftSidebar from "../../components/LeftSidebar";
import Navbar from "../../components/Navbar";
import RightSidebar from "../../components/RightSidebar";
import React from "react";
import { useUserContext } from "../Store/UserContext";

export default function Home({ children }: any) {
  console.log(useUserContext());
  let { userData } = useUserContext();
  console.log(userData);
  return (
    <Grid2 container sx={{ width: "100%", background: "#F6F8FD" }}>
      <LeftSidebar />
      <Grid2 size={{ xs: 12, sm: 7.6 }} offset={{ xs: 0, sm: 2.2 }} mt={3}>
        <Navbar />
        {children && children}
      </Grid2>
      <RightSidebar userData={userData} />
    </Grid2>
  );
}
