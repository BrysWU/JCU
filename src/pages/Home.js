import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import HomeGalleryCarousel from "../components/HomeGalleryCarousel";
import FacebookFeed from "../components/FacebookFeed";
import Testimonials from "../components/Testimonials";
import ServicesShowcase from "../components/ServicesShowcase";
import StatsSection from "../components/StatsSection";

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

      <ServicesShowcase />

      <StatsSection />

      <Testimonials />

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