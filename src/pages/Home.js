import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import HomeGalleryCarousel from "../components/HomeGalleryCarousel";
import FacebookFeed from "../components/FacebookFeed";

function Home() {
  return (
    <Box sx={{ py: 8, px: 2, minHeight: "60vh" }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h2" color="primary" gutterBottom>
          Justin's Marine Canvas & Upholstery
        </Typography>
        <Typography variant="h5" color="textSecondary" sx={{ mb: 3 }}>
          Volusia County’s Premier Choice for Boat & Auto Upholstery, Canvas, and Custom Sewing Services
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 670, mx: "auto", mb: 4, fontSize: 19 }}>
          Proudly serving New Smyrna Beach, Daytona Beach, Port Orange, Edgewater, and all of Volusia County, Florida.
          From marine canvas and boat upholstery to auto interiors, convertible tops, custom covers, and all kinds of repairs, we bring mobile, convenient, and professional service right to your door.
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

      <HomeGalleryCarousel />

      <Box sx={{ maxWidth: 1200, mx: "auto", mb: 6 }}>
        <Typography variant="h4" color="primary" sx={{ mb: 2, textAlign: "center" }}>
          What We Offer
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, minHeight: 190, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Boat Upholstery & Canvas
              </Typography>
              <Typography variant="body2">
                • Custom boat covers, bimini tops, enclosures<br/>
                • Marine upholstery restoration & repairs<br/>
                • Snap-in carpets, sunpads, seats & more
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, minHeight: 190, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Auto Upholstery & Convertible Tops
              </Typography>
              <Typography variant="body2">
                • Car & truck seat repair/upholstery<br/>
                • Convertible tops, headliners, door panels<br/>
                • Classic car restoration & custom projects
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 3, minHeight: 190, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography variant="h6" color="primary" gutterBottom>
                Custom Sewing & Mobile Service
              </Typography>
              <Typography variant="body2">
                • Home & business awnings, patio covers<br/>
                • Cushions, pillows, pet beds, repairs<br/>
                • Fully mobile service – pickup & delivery
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ maxWidth: 900, mx: "auto", mt: 6 }}>
        <Typography variant="h5" color="primary" sx={{ mb: 2 }}>
          Why Choose Justin's Marine Canvas & Upholstery?
        </Typography>
        <ul style={{ fontSize: 17, color: "inherit" }}>
          <li>
            <b>Locally owned and operated:</b> Justin Osborne is a lifelong Floridian and trusted New Smyrna Beach craftsman.
          </li>
          <li>
            <b>Full service, fully mobile:</b> We come to you throughout Volusia County—pickup and drop-off available.
          </li>
          <li>
            <b>Marine, auto, and custom sewing:</b> Boats, cars, RVs, home patios, and more.
          </li>
          <li>
            <b>Quality and care, every time:</b> We treat your project like it’s our own.
          </li>
          <li>
            <b>Free quotes & friendly advice:</b> Call, text, or fill out our contact form today!
          </li>
        </ul>
      </Box>

      <FacebookFeed />
    </Box>
  );
}

export default Home;