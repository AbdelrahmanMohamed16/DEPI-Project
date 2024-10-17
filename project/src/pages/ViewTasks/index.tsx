import { Badge, Box, Grid, Stack, Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import "./viewTasks.css";
import Modal from "./../../components/Modal/index";
import TaskCard from "./../../components/TaskCard/index";
import { useTasksContext } from "../Store/TasksContext";

export default function ViewTasks() {
  const [value, setValue] = useState("1");
  const { tasks, updateTask, deleteTask, tasksDueDate } = useTasksContext();
  if (tasks === "loading") return <p>Loading....</p>;

  // const [tasks, setTasks] = useState<
  //   { title: string; status: string; description: string }[]
  // >(JSON.parse(localStorage.getItem("tasks") || "[]") || []);

  // useEffect(() => {
  //   const storedTasks = localStorage.getItem("tasks");
  //   if (storedTasks) {
  //     setTasks(JSON.parse(storedTasks));
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleStatusChange = (id: string, value: string) => {
    updateTask(id, { status: value });
  };

  const handleUpdate = (id: string, updatedTask: object) => {
    // updatedTask[property] = value;
    // removeEmptyProperties(updateTask);
    updateTask(id, updatedTask);
    // updatedTask = {
    //   title: "",
    //   description: "",
    //   status: "",
    //   created: "",
    //   duo: "",
    // };
  };

  // const handleDelete = (taskIndex: number) => {
  //   const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
  //   setTasks(updatedTasks);
  //   localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  // };

  const handleDelete = (id: string) => {
    deleteTask(id);
  };

  // const handleUpdate = (
  //   index: number,
  //   updatedTask: { title: string; status: string; description: string }
  // ) => {
  //   const updatedTasks = tasks.map((task, i) =>
  //     i === index ? updatedTask : task
  //   );
  //   setTasks(updatedTasks);
  //   localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  // };

  return (
    <Grid container mt={3} mx={3}>
      <Grid sx={{ width: "100%" }}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack>
            <Typography variant="h4" mb={1} fontWeight={"bold"} color="#101C56">
              Tasks
            </Typography>
            <Typography variant="body1" color="#666666">
              Your Tasks in your Space
            </Typography>
          </Stack>
          <Stack mr={7}>
            <Modal />
          </Stack>
        </Stack>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                width: "100%",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="All Tasks"
                  className="Tab"
                  value="1"
                  icon={
                    <Badge
                      badgeContent={tasks?.length}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      sx={{
                        paddingX: "10px",
                      }}
                    />
                  }
                  iconPosition="end"
                  sx={{
                    paddingLeft: "2px",
                    paddingRight: "20px",
                    fontSize: 15,
                    textTransform: "capitalize",
                  }}
                />
                <Tab
                  label="Pending"
                  value="2"
                  className="Tab"
                  icon={
                    <Badge
                      badgeContent={
                        tasks?.filter((task) => task.status === "pending")
                          .length
                      }
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      sx={{ paddingX: "10px", backgroundColor: "#F6F8FD" }}
                    />
                  }
                  iconPosition="end"
                  sx={{
                    paddingLeft: "2px",
                    paddingRight: "20px",
                    fontSize: 15,
                    textTransform: "capitalize",
                  }}
                />
                <Tab
                  label="In Progress"
                  value="3"
                  className="Tab"
                  icon={
                    <Badge
                      badgeContent={
                        tasks?.filter((task) => task.status === "in progress")
                          .length
                      }
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      sx={{ paddingX: "10px", backgroundColor: "#F6F8FD" }}
                    />
                  }
                  iconPosition="end"
                  sx={{
                    paddingLeft: "2px",
                    paddingRight: "20px",
                    fontSize: 15,
                    textTransform: "capitalize",
                  }}
                />
                <Tab
                  label="Completed"
                  value="4"
                  className="Tab"
                  icon={
                    <Badge
                      badgeContent={
                        tasks?.filter((task) => task.status === "completed")
                          .length
                      }
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      sx={{ paddingX: "10px" }}
                    />
                  }
                  iconPosition="end"
                  sx={{
                    paddingLeft: "2px",
                    fontSize: 15,
                    textTransform: "capitalize",
                  }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Grid container spacing={2}>
                {tasks?.length === 0 ? (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    sx={{ width: "100%", mt: 2 }}
                  >
                    You have no tasks yet. Start adding tasks to organize your
                    workflow!
                  </Typography>
                ) : (
                  tasks?.map((task) => (
                    <Grid item xs={12} sm={6} key={task._id}>
                      <TaskCard
                        id={task._id}
                        title={task.title}
                        description={task.description}
                        status={task.status}
                        duo={task.duo}
                        onStatusChange={(newStatus) =>
                          handleStatusChange(task._id, newStatus)
                        }
                        onDelete={() => handleDelete(task._id)}
                        onUpdate={(updatedTask) =>
                          handleUpdate(task._id, updatedTask)
                        }
                      />
                    </Grid>
                  ))
                )}
              </Grid>
            </TabPanel>
            <TabPanel value="2">
              <Grid container spacing={2}>
                {tasks?.filter((task) => task.status === "pending").length ===
                0 ? (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    sx={{ width: "100%", mt: 2 }}
                  >
                    No pending tasks at the moment. Enjoy your productivity!
                  </Typography>
                ) : (
                  tasks
                    ?.filter((task) => task.status === "pending")
                    .map((task) => (
                      <Grid item xs={12} sm={6} key={task._id}>
                        <TaskCard
                          id={task._id}
                          title={task.title}
                          description={task.description}
                          status={task.status}
                          duo={task.duo}
                          onStatusChange={(newStatus) =>
                            handleStatusChange(task._id, newStatus)
                          }
                          onDelete={() => handleDelete(task._id)}
                          onUpdate={(updatedTask) =>
                            handleUpdate(task._id, updatedTask)
                          }
                        />
                      </Grid>
                    ))
                )}
              </Grid>
            </TabPanel>
            <TabPanel value="3">
              <Grid container spacing={2}>
                {tasks?.filter((task) => task.status === "in progress")
                  .length === 0 ? (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    sx={{ width: "100%", mt: 2 }}
                  >
                    No tasks are currently in progress. Start working on a task
                    to see it here.
                  </Typography>
                ) : (
                  tasks
                    ?.filter((task) => task.status === "in progress")
                    .map((task) => (
                      <Grid item xs={12} sm={6} key={task._id}>
                        <TaskCard
                          id={task._id}
                          title={task.title}
                          description={task.description}
                          status={task.status}
                          duo={task.duo}
                          onStatusChange={(newStatus) =>
                            handleStatusChange(task._id, newStatus)
                          }
                          onDelete={() => handleDelete(task._id)}
                          onUpdate={(updatedTask) =>
                            handleUpdate(task._id, updatedTask)
                          }
                        />
                      </Grid>
                    ))
                )}
              </Grid>
            </TabPanel>
            <TabPanel value="4">
              <Grid container spacing={2}>
                {tasks?.filter((task) => task.status === "completed").length ===
                0 ? (
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    sx={{ width: "100%", mt: 2 }}
                  >
                    No completed tasks to display. Mark tasks as completed to
                    track your achievements
                  </Typography>
                ) : (
                  tasks
                    ?.filter((task) => task.status === "completed")
                    .map((task) => (
                      <Grid item xs={12} sm={6} key={task._id}>
                        <TaskCard
                          id={task._id}
                          title={task.title}
                          description={task.description}
                          status={task.status}
                          duo={task.duo}
                          onStatusChange={(newStatus) =>
                            handleStatusChange(task._id, newStatus)
                          }
                          onDelete={() => handleDelete(task._id)}
                          onUpdate={(updatedTask) =>
                            handleUpdate(task._id, updatedTask)
                          }
                        />
                      </Grid>
                    ))
                )}
              </Grid>
            </TabPanel>
          </TabContext>
        </Box>
      </Grid>
    </Grid>
  );
}

// Lionel Mohamed
