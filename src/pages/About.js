import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PetsIcon from "@mui/icons-material/Pets";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "@mui/material/Link";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import HomeIcon from "@mui/icons-material/Home";
import familyPhoto from "../assets/images/family.jpg";

function About() {
  return (
    <Container
      maxWidth="md"
      sx={{
        py: 8,
        display: "grid",
        justifyItems: "center",
      }}
    >
      <Typography variant="h3" color="primary" gutterBottom>
        About Justin & Our Story
      </Typography>
      <Divider sx={{ mb: 3, width: "100%" }} />
      <Typography variant="h6" color="textSecondary" sx={{ mb: 2 }}>
        Local Roots. Family Owned. Passion for Craft.
      </Typography>
      <Typography paragraph sx={{ width: "100%" }}>
        <strong>Justin Osborne</strong> is the heart and hands behind Justin's Marine Canvas and Upholstery. A proud Florida native, Justin has called New Smyrna Beach home for over 20 years, raising three wonderful kids with his wife. Deeply rooted in the community and passionate about his craft, Justin brings decades of experience in both marine and auto upholstery, custom canvas, and sewing services to Volusia County and beyond.
      </Typography>
      <Typography paragraph sx={{ width: "100%" }}>
        Justin’s journey began with a love for fabric, creativity, and hands-on work. Over the years, he’s restored countless boat interiors, tailored custom covers, revived classic car seats, and even created unique sewn pieces for homes and businesses. His mission: deliver unbeatable quality and friendly, mobile service—right where you need it, from New Smyrna and Daytona Beach to Edgewater and Port Orange.
      </Typography>
      <Typography paragraph sx={{ width: "100%" }}>
        When he's not hard at work, Justin enjoys life with his family, sharing adventures with his three kids and wife, and caring for their many pets—including reptiles, cats, dogs, and fish. Building a business is about more than just work—it's about growing something lasting for his family and serving the community he loves.
      </Typography>
      <Typography paragraph sx={{ width: "100%" }}>
        In 2024, Justin expanded his vision by partnering with Nick and Cody’s Creations. Together, their combined expertise means even more creative solutions and even better service for every customer throughout Volusia County.
      </Typography>
      <Typography paragraph sx={{ width: "100%" }}>
        <strong>Our specialties:</strong>
        <ul>
          <li>Boat and marine upholstery, canvas, covers, and enclosures</li>
          <li>Car and truck upholstery, convertible tops, headliners</li>
          <li>Custom sewing for homes, patios, awnings, and more</li>
          <li>Mobile service with pickup and drop-off for your convenience</li>
        </ul>
      </Typography>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <WorkIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Experience
              </Typography>
              <Typography variant="body2" color="textSecondary">
                20+ years of hands-on experience in marine canvas, auto upholstery, and custom sewing
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <HomeIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Local Roots
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Proud New Smyrna Beach resident for over 20 years, deeply connected to the community
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card elevation={3} sx={{ height: '100%', textAlign: 'center' }}>
            <CardContent>
              <SchoolIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />
              <Typography variant="h6" gutterBottom>
                Continuous Learning
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Always staying current with the latest materials, techniques, and industry standards
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Stack direction="row" spacing={3} alignItems="center" sx={{ mt: 4 }}>
        <Avatar
          alt="Justin Osborne"
          src={familyPhoto}
          sx={{ width: 100, height: 100 }}
        />
        <Box>
          <Typography variant="subtitle1"><FamilyRestroomIcon sx={{ fontSize: 18, mb: -0.5, mr: 0.4 }}/> Justin Osborne</Typography>
          <Typography variant="body2" color="textSecondary">
            Owner, Craftsman, and Family Man
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
            <DirectionsBoatIcon color="primary" />
            <LocalCarWashIcon color="primary" />
            <PetsIcon color="primary" />
          </Stack>
        </Box>
      </Stack>
      <Divider sx={{ my: 5, width: "100%" }} />

      <Typography variant="body1" sx={{ fontSize: 18, mb: 2 }}>
        <strong>Your project is our passion.</strong> We look forward to serving you!
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <FacebookIcon color="primary" />
        <Link href="https://www.facebook.com/kingofcanvas" target="_blank" rel="noopener" underline="hover">
          Justin's Marine Canvas and Upholstery on Facebook
        </Link>
      </Stack>
    </Container>
  );
}

export default About;