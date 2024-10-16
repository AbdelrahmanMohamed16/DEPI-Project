import { Grid, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { useUserContext } from "../Store/UserContext";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import cover from "../../assets/kobu.jpeg";
import { useTasksContext } from "../Store/TasksContext";
import dayjs, { Dayjs } from "dayjs";
import SimpleTaskCard from "../../components/SimpleTaskCard";

interface Task {
  // Task: {
  _id: string;
  title: string;
  description: string;
  status: string;
  created: number;
  duo: Dayjs | null;
  // };
}

export default function Overview() {
  const { userData } = useUserContext();
  const { tasks } = useTasksContext();
  const nearDuoDate = (tasks: Task[]) => {
    const today = dayjs();
    const threeDaysFromNow = today.add(3, "day");

    return tasks.filter((task) => {
      const taskDueDate = dayjs(task.duo);
      return (
        taskDueDate.isAfter(today) &&
        taskDueDate.isBefore(threeDaysFromNow) &&
        task.status !== "completed"
      );
    });
  };

  function Tasks() {
    if (tasks !== "loading" && tasks !== null) {
      const nextTasks = nearDuoDate(tasks);
      return (
        <Grid container spacing={2}>
          {nextTasks?.map((task) => (
            <Grid item xs={12} sm={6} key={task._id}>
              <SimpleTaskCard
                id={task._id}
                title={task.title}
                description={task.description}
                status={task.status}
                duo={task.duo}
              />
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return (
        <Stack flexDirection={"row"} justifyContent={"center"}>
          <Typography
            variant="body1"
            color="text.secondary"
            align="center"
            sx={{ width: "100%", mt: 2 }}
          >
            You have no tasks yet. Start adding tasks to organize your workflow!
          </Typography>
        </Stack>
      );
    }
  }

  if (!userData) return <p>Loading user data...</p>;
  return (
    <Grid2 container mt={3} mx={3}>
      <Grid2 sx={{ width: "100%" }}>
        <Stack>
          <Stack sx={{ flexDirection: "row", alignItems: "center" }}>
            <WavingHandIcon
              sx={{
                rotate: "290deg",
                color: "yellow",
                alignItems: "center",
                fontSize: "50px",
                mr: "10px",
              }}
            />
            <Stack>
              <Typography
                variant="h4"
                mb={1}
                fontWeight={"bold"}
                color="#101C56"
              >
                Hi {userData.username}
              </Typography>
              <Typography variant="body1" color="#666666">
                Wecome to Worknest Task Management
              </Typography>
            </Stack>
          </Stack>
          <Stack
            sx={{
              backgroundImage: `url(${cover})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "burn",
              width: "100%",
              borderRadius: "20px",
              my: 3,
            }}
          >
            <Stack sx={{ width: "70%" }}>
              <Typography variant="body1" color="#FFFFFF" mt={5} ml={4}>
                Success is not final; failure is not fatal: It is the courage to
                continue that counts.
              </Typography>
              <Typography variant="body1" color="#FFFFFF" mt={1} mb={5} ml={4}>
                -Winston S. Churchill
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="h6" fontWeight={"bold"} color="#101C56" mt={1}>
            Tasks for Today
          </Typography>
          <Tasks></Tasks>
          <Stack sx={{ flexDirection: "row" }}></Stack>
        </Stack>
      </Grid2>
    </Grid2>
  );
}
