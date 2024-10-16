import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Switch,
  Typography,
  Modal,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PasswordIcon from "@mui/icons-material/Password";

export default function Settings() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    fullname: "Adeeko Emmanuel",
    email: "emmy4sure.web@gmail.com",
    password: "********",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Handle save logic here (e.g., API call to save changes)
    setOpen(false); // Close modal after saving
  };

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
                <PersonIcon sx={{ fontSize: 50, mr: 3, color: "#3754DB" }} />
                <Box>
                  <Typography sx={{ fontSize: "12px" }} variant="h6">
                    Fullname
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "19px" }}>
                    {userData.fullname}
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
                <EmailIcon sx={{ fontSize: 50, mr: 3, color: "#3754DB" }} />
                <Box>
                  <Typography variant="h6" sx={{ fontSize: "12px" }}>
                    Email Address
                  </Typography>
                  <Typography sx={{ fontWeight: "bold", fontSize: "19px" }}>
                    {userData.email}
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
                  <Typography sx={{ fontWeight: "bold", fontSize: "19px" }}>
                    {"•".repeat(userData.password.length)}
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Stack sx={{ ml: "auto" }}>
              <Button
                onClick={handleOpen}
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

        {/* Modal for editing */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="edit-user-modal"
          aria-describedby="edit-user-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: 3,
              boxShadow: 24,
              py: 7,
              px: 4,
            }}
          >
            <Typography id="edit-user-modal" variant="h6" component="h2">
              Edit User Information
            </Typography>
            <TextField
              label="Fullname"
              name="fullname"
              value={userData.fullname}
              onChange={handleChange}
              fullWidth
              sx={{ mt: 3 }}
            />
            <TextField
              label="Email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              fullWidth
              sx={{ mt: 3 }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={userData.password}
              onChange={handleChange}
              fullWidth
              sx={{ mt: 3 }}
            />
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{ backgroundColor: "#3754DB", color: "#fff" }}
                onClick={handleSave}
              >
                Save
              </Button>
              <Button
                variant="outlined"
                sx={{ backgroundColor: "#3754DB", color: "#fff" }}
                onClick={handleClose}
              >
                Cancel
              </Button>
            </Stack>
          </Box>
        </Modal>

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
