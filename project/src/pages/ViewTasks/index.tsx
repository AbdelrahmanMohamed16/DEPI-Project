import { Badge, Box, Button, Grid2, Stack, Typography } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

export default function ViewTasks() {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Grid2 container mt={3} mx={3}>
      <Grid2 sx={{ width: "100%" }}>
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
          <Button
            variant="contained"
            sx={{
              background: "#3754DB",
              borderRadius: "12px",
              paddingX: "20px",
              paddingY: "12px",
            }}
          >
            Create Task
          </Button>
        </Stack>
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                width: "fit-content",
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Item One"
                  value="1"
                  icon={
                    <Badge
                      badgeContent={100}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      sx={{ paddingX: "10px", background: "#F0F0F0" }}
                    ></Badge>
                  }
                  iconPosition="end"
                  sx={{ paddingLeft: "2px", paddingRight: "20px" }}
                />
                <Tab
                  label="Item Two"
                  value="2"
                  icon={
                    <Badge
                      badgeContent={9}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      sx={{ paddingX: "10px", backgroundColor: "#F6F8FD" }}
                    ></Badge>
                  }
                  iconPosition="end"
                  sx={{ paddingLeft: "2px", paddingRight: "20px" }}
                />
                <Tab
                  label="Item Three"
                  value="3"
                  icon={
                    <Badge
                      badgeContent={100}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                      }}
                      sx={{ paddingX: "10px" }}
                    ></Badge>
                  }
                  iconPosition="end"
                  sx={{ paddingLeft: "2px" }}
                />
              </TabList>
            </Box>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </Grid2>
    </Grid2>
  );
}
