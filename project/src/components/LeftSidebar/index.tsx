import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid2,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Link } from "react-router-dom";
import { useTasksContext } from "../../pages/Store/TasksContext";
export default function LeftSidebar() {
  const [open, setOpen] = React.useState(false);
  const { workspace } = useTasksContext();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List sx={{ my: 6 }}>
        {[
          {
            text: "Overview",
            icon: (
              <GridViewOutlinedIcon
                sx={{ color: "#3754DB", fontSize: "40px" }}
              />
            ),
          },
          {
            text: "Tasks",
            icon: (
              <TextSnippetIcon sx={{ color: "#3754DB" }} fontSize="large" />
            ),
          },
          {
            text: "Settings",
            icon: (
              <SettingsOutlinedIcon
                sx={{ color: "#3754DB" }}
                fontSize="large"
              />
            ),
          },
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <Link
                to={item.text}
                style={{
                  textDecoration: "none",
                  color: "#3754DB",
                  display: "flex",
                }}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
  return (
    <Grid2
      size={{ xs: 1.1, md: 2 }}
      position={"fixed"}
      top={0}
      bottom={0}
      left={0}
      sx={{
        background: "#FFFFFF",
        zIndex: 3,
      }}
    >
      <Container sx={{ display: { xs: "none", md: "block" } }}>
        <Box mb={5} mt={10}>
          <Typography variant="h5" sx={{ color: "#101C56", fontWeight: "600" }}>
            My Space
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#666666" }}>
            {workspace
              ? workspace !== "loading"
                ? workspace.title
                : "Loading...."
              : ""}
          </Typography>
        </Box>
        <Stack sx={{ width: "fit-content", alignItems: "start" }}>
          <Button
            variant="text"
            startIcon={
              <GridViewOutlinedIcon
                sx={{ color: "#3754DB", fontSize: "40px" }}
              />
            }
            sx={{
              color: "#666666",
              fontSize: "1.2rem",
              textTransform: "capitalize",
            }}
          >
            <Link
              to={"overview"}
              style={{ textDecoration: "none", color: "#3754DB" }}
            >
              Overview
            </Link>
          </Button>
          <Button
            variant="text"
            startIcon={
              <TextSnippetIcon sx={{ color: "#3754DB", fontSize: "40px" }} />
            }
            sx={{
              color: "#666666",
              fontSize: "1.2rem",
              textTransform: "capitalize",
            }}
          >
            <Link
              to={"tasks"}
              style={{ textDecoration: "none", color: "#3754DB" }}
            >
              Tasks
            </Link>
          </Button>
          <Button
            variant="text"
            startIcon={
              <SettingsOutlinedIcon
                sx={{ color: "#3754DB", fontSize: "40px" }}
              />
            }
            sx={{
              color: "#666666",
              fontSize: "1.2rem",
              textTransform: "capitalize",
            }}
          >
            <Link
              to={"settings"}
              style={{ textDecoration: "none", color: "#3754DB" }}
            >
              Settings
            </Link>
          </Button>
        </Stack>
      </Container>
      <Container sx={{ display: { xs: "block", md: "none" }, padding: "0" }}>
        <Stack mt={4.5}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </Stack>
      </Container>
    </Grid2>
  );
}
