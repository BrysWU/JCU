import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

function About() {
  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        About Us
      </Typography>
      <Divider sx={{ mb: 3 }} />
      <Typography variant="h6" color="textSecondary" sx={{ mb: 2 }}>
        Who We Are
      </Typography>
      <Typography paragraph>
        We are a dedicated team of canvas and upholstery professionals with years of experience in delivering custom solutions for boats, homes, and businesses. Our passion for craftsmanship and attention to detail set us apart in the industry.
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 2 }}>
        What We Do
      </Typography>
      <Typography paragraph>
        We specialize in marine canvas, boat covers, bimini tops, reupholstery, custom cushions, commercial awnings, and more. Whether you need to restore, repair, or create something new, we provide expert advice and superior results.
      </Typography>
      <Stack direction="row" spacing={4} sx={{ mt: 4 }}>
        <Avatar
          alt="John Doe"
          src="/gallery/owner.jpg"
          sx={{ width: 100, height: 100 }}
        />
        <Box>
          <Typography variant="subtitle1">John Doe</Typography>
          <Typography variant="body2" color="textSecondary">
            Owner & Master Craftsman
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}

export default About;