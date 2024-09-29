import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import React from "react";
import { Button, Container, Grid2, Stack, Typography } from "@mui/material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Right() {
  return (
    <Grid2
      size={2}
      offset={0.2}
      mt={2}
      sx={{
        background: "#FFFFFF",
        display: { xs: "none", sm: "flex" },
        borderRadius: "24px",
      }}
    >
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Stack sx={{ alignItems: "center", width: "100%" }} mt={12}>
          <StyledBadge
            overlap="rectangular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            sx={{ width: "90px", marginBottom: "9px" }}
          >
            <Avatar
              alt="Abdelrahman "
              src="/static/images/avatar/1.jpg"
              sx={{ borderRadius: "10px", width: "100%", height: "90px" }}
            />
          </StyledBadge>
          <Typography variant="h6" color="#101C56">
            User Name
          </Typography>
          <Typography variant="body2" color="#666666">
            Useremail@gmail.com
          </Typography>
          <Button
            variant="contained"
            sx={{
              background: "#3754DB",
              borderRadius: "12px",
              paddingX: "15px",
              paddingY: "8px",
              marginTop: "8px",
              marginBottom: "50px",
            }}
          >
            My Profile
          </Button>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar sx={{ background: "#F6F8FD" }} />
          </LocalizationProvider>
        </Stack>
      </Container>
    </Grid2>
  );
}
