import React from "react";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from "@mui/material/Paper";

function DarkModeToggle({ mode, setMode }) {
  return (
    <Paper
      elevation={4}
      sx={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 1500,
        bgcolor: "background.paper",
        borderRadius: "50%",
        p: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton
        color="primary"
        onClick={() => setMode((prev) => (prev === "light" ? "dark" : "light"))}
        aria-label="Toggle dark mode"
        size="large"
      >
        {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </Paper>
  );
}

export default DarkModeToggle;