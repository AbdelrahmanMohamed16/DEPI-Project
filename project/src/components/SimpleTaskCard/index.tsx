import React, { useState } from "react";
import { Card, CardContent, Typography, Chip } from "@mui/material";
import { Dayjs } from "dayjs";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  status: string;
  duo: Dayjs | null;
}

export default function TaskCard({
  id,
  title,
  description,
  status,
  duo,
}: TaskCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 2,
        position: "relative",
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        <Chip
          label={status}
          color={
            status === "completed"
              ? "success"
              : status === "pending"
              ? "default"
              : "primary"
          }
          size="small"
          sx={{ mb: 2 }}
        />

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {/* 
        <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
          {status !== "completed" && (
            <Button
              variant="contained"
              color="success"
              startIcon={<CheckIcon />}
              sx={{ textTransform: "none" }}
            >
              Mark As Done
            </Button>
          )}
        </Box> */}
      </CardContent>
    </Card>
  );
}
