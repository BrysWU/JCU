import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/material/Link";

function SiteNotification() {
  // For testing, always show notification on reload by default
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    // When ready for production, re-enable localStorage persistence here
    // localStorage.setItem("site_notification_dismissed", "true");
  };

  if (!open) return null;

  return (
    <Box
      sx={{
        bgcolor: "#5e07b5",
        color: "white",
        px: 2,
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "sticky",
        top: 64, // navbar MUI default height is 64px for desktop
        zIndex: 1101, // Above MUI AppBar (z-index 1100)
        minHeight: 44,
        width: "100%",
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