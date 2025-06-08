import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Work", path: "/our-work" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();

  return (
    <AppBar position="sticky" color="primary" elevation={2}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Canvas & Upholstery
        </Typography>
        <Box>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              color={location.pathname === item.path ? "secondary" : "inherit"}
              sx={{ mx: 1 }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;