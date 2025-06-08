import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";

const NOTIFICATION_STORAGE_KEY = "site_notification_dismissed";

function SiteNotification() {
  const [open, setOpen] = useState(() => {
    // Persist dismissal across reloads
    const dismissed = localStorage.getItem(NOTIFICATION_STORAGE_KEY);
    return dismissed !== "true";
  });

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(NOTIFICATION_STORAGE_KEY, "true");
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        color: "white",
        px: 2,
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        minHeight: 44,
      }}
    >
      <Typography sx={{ fontSize: { xs: 13, md: 16 }, fontWeight: 500, letterSpacing: 0.1 }}>
        Justin's Marine Canvas & Upholstery has partnered with{" "}
        <Link
          href="https://www.nickscreationsfl.com/"
          target="_blank"
          rel="noopener"
          sx={{ color: "white", textDecoration: "underline", fontWeight: 600 }}
        >
          Nick and Cody’s Creations
        </Link>.
      </Typography>
      <IconButton
        size="small"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          color: "white",
        }}
        aria-label="Close notification"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default SiteNotification;