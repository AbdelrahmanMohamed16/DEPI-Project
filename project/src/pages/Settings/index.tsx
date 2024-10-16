import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

export default function Settings() {
  return (
    <>
      <Stack>
        <Typography sx={{ fontWeight: "bold", mt: 3, ml: 3 }} variant="h5">
          Settings
        </Typography>
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "#B80020",
            borderRadius: 3,
            alignSelf: "flex-end",
            px: 3,
            py: 1,
          }}
        >
          Log Out
        </Button>

        <Container>
          <Typography variant="h6">Account Settings</Typography>
          <Grid
            container
            spacing={2}
            sx={{
              borderRadius: 5,
              mt: 2,
              backgroundColor: "white",
              py: 5,
            }}
          >
            <Grid item xs={11} sx={{ mx: "auto" }}>
              <Box
                sx={{
                  border: "solid 0.1px #b8b8b8",
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  display: "flex",
                }}
              >
                <PersonIcon
                  sx={{ fontSize: 50, mr: 3, color: "#3754DB" }}
                ></PersonIcon>

                <Box>
                  <Typography sx={{ fontSize: "12px" }} variant="h6">
                    Fullname
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "19px" }}>
                    Adeeko Emmanuel
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={11} sx={{ mx: "auto" }}>
              <Box
                sx={{
                  border: "solid 0.2px #b8b8b8",
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  display: "flex",
                }}
              >
                <EmailIcon
                  sx={{ fontSize: 50, mr: 3, color: "#3754DB" }}
                ></EmailIcon>
                <Box>
                  <Typography variant="h6" sx={{ fontSize: "12px" }}>
                    Email Address
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "19px" }}>
                    emmy4sure.web@gmail.com
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={11} sx={{ mx: "auto" }}>
              <Box
                sx={{
                  border: "solid 0.2px #b8b8b8",
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  display: "flex",
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: "12px" }} variant="h6">
                    Password
                  </Typography>
                  <PasswordIcon></PasswordIcon>
                  <PasswordIcon></PasswordIcon>
                  <PasswordIcon></PasswordIcon>
                  <PasswordIcon></PasswordIcon>
                </Box>
              </Box>
            </Grid>

            <Stack sx={{ ml: "auto" }}>
              <Button
                // onClick={openModal}
                variant="contained"
                size="medium"
                sx={{
                  backgroundColor: "#3754DB",
                  borderRadius: 3,
                  alignSelf: "flex-end",
                  px: 4,
                  py: 1.5,
                  mr: 4.85,
                  mt: 4,
                }}
              >
                Edit
              </Button>
            </Stack>
          </Grid>
        </Container>

        <Container>
          <Typography sx={{ mt: 5 }} variant="h6">
            Notification Settings
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              borderRadius: 5,
              mt: 2,
              backgroundColor: "white",
              py: 5,
            }}
          >
            <Grid item xs={11} sx={{ mx: "auto" }}>
              <Stack
                sx={{
                  border: "solid 0.1px #b8b8b8",
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  display: "flex",
                }}
              >
                <Stack
                  sx={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Typography sx={{ fontSize: "20px" }}>
                    Allow Desktop Notifications
                  </Typography>
                  <Switch
                    sx={{
                      color: "#EEF0FC",
                      backgroundColor: "#EEF0FC",
                      borderRadius: 5,
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={11} sx={{ mx: "auto" }}>
              <Stack
                sx={{
                  border: "solid 0.1px #b8b8b8",
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  display: "flex",
                }}
              >
                <Stack
                  sx={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Typography sx={{ fontSize: "20px" }}>
                    Send Critical Notifications to My Email{" "}
                  </Typography>
                  <Switch
                    defaultChecked
                    sx={{
                      color: "#EEF0FC",
                      backgroundColor: "#EEF0FC",
                      borderRadius: 5,
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Typography sx={{ mt: 5 }} variant="h6">
            Accessibility Settings
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{
              borderRadius: 5,
              mt: 2,
              backgroundColor: "white",
              py: 5,
            }}
          >
            <Grid item xs={11} sx={{ mx: "auto" }}>
              <Stack
                sx={{
                  border: "solid 0.1px #b8b8b8",
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  display: "flex",
                }}
              >
                <Stack
                  sx={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Typography sx={{ fontSize: "20px" }}>
                    Allow Desktop Notifications
                  </Typography>
                  <Switch
                    sx={{
                      color: "#EEF0FC",
                      backgroundColor: "#EEF0FC",
                      borderRadius: 5,
                    }}
                  />
                </Stack>
              </Stack>
            </Grid>

            <Grid item xs={11} sx={{ mx: "auto" }}>
              <Stack
                sx={{
                  border: "solid 0.1px #b8b8b8",
                  borderRadius: 3,
                  px: 5,
                  py: 2,
                  display: "flex",
                }}
              >
                <Stack
                  sx={{ flexDirection: "row", justifyContent: "space-between" }}
                >
                  <Typography
                    sx={{ fontSize: "20px", color: "#16171D", opacity: ".5" }}
                  >
                    Personalize Workspace Theme
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Stack>
    </>
  );
}
