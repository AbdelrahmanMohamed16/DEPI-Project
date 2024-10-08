import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import React from "react";
import { useUserContext } from "../Store/UserContext";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import cover from "../../assets/kobu.jpeg";
import { Gradient } from "@mui/icons-material";

export default function Overview() {
  const { userData } = useUserContext();
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
                Hi {userData.name}
              </Typography>
              <Typography variant="body1" color="#666666">
                Wecome to Semicolon Task Management
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
          <Stack sx={{ flexDirection: "row" }}></Stack>
        </Stack>
      </Grid2>
    </Grid2>
  );
}
