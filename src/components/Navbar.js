import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Work", path: "/our-work" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const location = useLocation();

  return (
    <AppBar 
      position="sticky" 
      color="primary" 
      elevation={3}
      sx={{
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <Toolbar sx={{ minHeight: '70px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <DirectionsBoatIcon sx={{ fontSize: 32, mr: 1, color: 'secondary.main' }} />
            <LocalCarWashIcon sx={{ fontSize: 32, mr: 2, color: 'secondary.main' }} />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #fff 30%, #f0f0f0 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Justin's Marine Canvas & Upholstery
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          {navItems.map((item) => (
            <Button
              key={item.label}
              component={Link}
              to={item.path}
              sx={{ 
                mx: 1,
                color: 'white',
                fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                borderBottom: location.pathname === item.path ? '2px solid #ff9800' : 'none',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)'
                }
              }}
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