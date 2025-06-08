import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Box
      sx={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 8,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h2" color="primary" gutterBottom>
        Canvas & Upholstery Specialists
      </Typography>
      <Typography variant="h5" color="textSecondary" sx={{ mb: 4 }}>
        Custom canvas work, marine upholstery, repairs, and restoration. 
        Modern craftsmanship, tailored to your needs.
      </Typography>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        component={Link}
        to="/contact"
      >
        Request a Quote
      </Button>
    </Box>
  );
}

export default Home;