import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";

const stats = [
  {
    icon: <DirectionsBoatIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    number: "500+",
    label: "Boats Restored",
    description: "Marine canvas and upholstery projects completed"
  },
  {
    icon: <LocalCarWashIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    number: "300+",
    label: "Cars & Trucks",
    description: "Auto upholstery and convertible top projects"
  },
  {
    icon: <HomeIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    number: "200+",
    label: "Custom Projects",
    description: "Home and business sewing projects completed"
  },
  {
    icon: <StarIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
    number: "100%",
    label: "Satisfaction Rate",
    description: "Customer satisfaction across Volusia County"
  }
];

function StatsSection() {
  return (
    <Box 
      sx={{ 
        py: 6,
        background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
        color: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Track Record
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9 }}>
            Trusted by hundreds of customers across Volusia County
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper 
                elevation={0}
                sx={{ 
                  p: 3,
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)'
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {stat.icon}
                </Box>
                
                <Typography 
                  variant="h3" 
                  sx={{ 
                    fontWeight: 'bold',
                    mb: 1,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {stat.number}
                </Typography>
                
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 1,
                    fontWeight: 'bold'
                  }}
                >
                  {stat.label}
                </Typography>
                
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.9,
                    lineHeight: 1.4
                  }}
                >
                  {stat.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
            Ready to join our satisfied customers?
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Call or text (386) 555-1234 for your free consultation today!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default StatsSection; 