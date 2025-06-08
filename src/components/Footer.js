import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 3,
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
      component="footer"
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Canvas & Upholstery. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;