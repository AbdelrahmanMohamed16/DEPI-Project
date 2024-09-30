import {
  Box,
  Button,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import React from "react";
import { Link } from "react-router-dom";
export default function LeftSidebar() {
  return (
    <Grid2
      size={2}
      position={"fixed"}
      top={0}
      bottom={0}
      left={0}
      sx={{
        background: "#FFFFFF",
        zIndex: 3,
        display: { xs: "none", sm: "flex" },
      }}
    >
      <Container>
        <Box mb={5} mt={10}>
          <Typography variant="h5" sx={{ color: "#101C56", fontWeight: "600" }}>
            My Space
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#666666" }}>
            Workspace Title
          </Typography>
        </Box>
        <Stack sx={{ width: "fit-content", alignItems: "start" }}>
          <Button
            variant="text"
            startIcon={
              <GridViewOutlinedIcon
                sx={{ color: "#3754DB" }}
                fontSize="large"
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
              <TextSnippetIcon sx={{ color: "#3754DB" }} fontSize="large" />
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
                sx={{ color: "#3754DB" }}
                fontSize="large"
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
    </Grid2>
  );
}
