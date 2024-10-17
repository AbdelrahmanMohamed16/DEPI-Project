import { Grid2 } from "@mui/material";
import LeftSidebar from "../../components/LeftSidebar";
import Navbar from "../../components/Navbar";
import RightSidebar from "../../components/RightSidebar";
import React from "react";
import { useUserContext } from "../Store/UserContext";
import { Outlet } from "react-router-dom";
import { useTasksContext } from "../Store/TasksContext";

export default function Home() {
  let { userData } = useUserContext();
  const { workspace } = useTasksContext();
  return (
    <Grid2 container sx={{ width: "100%", background: "#F6F8FD" }}>
      <LeftSidebar workspace={workspace} />
      <Grid2 size={{ xs: 12, sm: 7.6 }} offset={{ xs: 0, sm: 2.2 }} mt={3}>
        <Navbar />
        <Outlet />
      </Grid2>
      <RightSidebar userData={userData} />
    </Grid2>
  );
}
