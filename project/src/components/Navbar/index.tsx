import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { useTasksContext } from "../../pages/Store/TasksContext";
import dayjs, { Dayjs } from "dayjs";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 10,
  backgroundColor: "transparent",
  border: "1px solid #A8ABBD",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "30ch",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "black",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
}));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "black",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(1)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.down("md")]: {
//       width: "15ch",
//     },
//     [theme.breakpoints.down("sm")]: {
//       width: "12ch",
//     },
//     [theme.breakpoints.only("xs")]: {
//       width: "20ch",
//     },
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

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

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
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

  if (tasks !== "loading" && tasks !== null) {
    nearDuoDate(tasks);
  }

  function NotificationRing({ tasks }: any) {
    if (tasks !== "loading" && tasks !== null) {
      const nextTasks = nearDuoDate(tasks);
      console.log(nextTasks);
      return (
        <Box sx={{ display: { md: "flex" } }}>
          <IconButton
            size="large"
            aria-label={`show ${nextTasks.length} new notifications`}
            color="inherit"
          >
            <Badge badgeContent={nextTasks.length} color="error">
              <NotificationsIcon
                sx={{
                  color: "#3754DB",
                }}
              />
            </Badge>
          </IconButton>
        </Box>
      );
    } else {
      return (
        <Box sx={{ display: { md: "flex" } }}>
          <IconButton
            size="large"
            aria-label={`show 0 new notifications`}
            color="inherit"
          >
            <Badge badgeContent={0} color="error">
              <NotificationsIcon
                sx={{
                  color: "#3754DB",
                }}
              />
            </Badge>
          </IconButton>
        </Box>
      );
    }
  }

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      await sleep(1e3); // For demo purposes.
      setLoading(false);
      if (tasks !== "loading" && tasks !== null) {
        setOptions([...tasks]);
      }
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: "none", background: "transparent" }}
      >
        <Toolbar>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            {/* <StyledInputBase
              placeholder="Search your Tasks here..."
              inputProps={{ "aria-label": "search" }}
            /> */}
            <Autocomplete
              // sx={{ width: 300 }}
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              isOptionEqualToValue={(option, value) =>
                option.title === value.title
              }
              getOptionLabel={(option) => option.title}
              options={options}
              loading={loading}
              popupIcon={null}
              disableClearable
              onChange={(event, value) => {
                console.log("Selected option:", value);
                // Handle the selected option here
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search Task"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      endAdornment: (
                        <>
                          {loading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </>
                      ),
                    },
                  }}
                />
              )}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <NotificationRing tasks={tasks}></NotificationRing>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
