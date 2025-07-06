import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box
      sx={{
        mt: 6,
        py: 4,
        background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
        color: "white",
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Justin's Marine Canvas & Upholstery
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9 }}>
              Volusia County's premier choice for marine canvas, auto upholstery, and custom sewing services.
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Locally owned and operated by Justin Osborne
            </Typography>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">(386) 555-1234</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">justinscanvasupholstery@gmail.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <FacebookIcon sx={{ mr: 1, fontSize: 20 }} />
              <Link href="https://www.facebook.com/kingofcanvas" target="_blank" rel="noopener" sx={{ color: 'white', textDecoration: 'none' }}>
                Facebook Page
              </Link>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Service Areas
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2">Volusia County, Florida</Typography>
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              New Smyrna Beach<br/>
              Daytona Beach<br/>
              Port Orange<br/>
              Edgewater<br/>
              And surrounding areas
            </Typography>
          </Grid>
        </Grid>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 3, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} Justin's Marine Canvas & Upholstery. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;