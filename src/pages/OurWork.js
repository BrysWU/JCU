import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

// Use placeholder images and video for demonstration.
const galleryData = [
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=11",
    title: "Custom Boat Cover",
    desc: "Fitted marine canvas cover designed for a sport boat in Daytona Beach.",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=12",
    title: "Pontoon Seat Restoration",
    desc: "Complete reupholstery and foam replacement for a family’s pontoon boat.",
  },
  {
    type: "video",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Convertible Top Installation",
    desc: "A time-lapse showcasing our seamless convertible top replacement on a classic car.",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=13",
    title: "Auto Interior Refresh",
    desc: "Custom two-tone seats and new door panels for a client in Port Orange.",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=14",
    title: "Bimini Top & Enclosure",
    desc: "Marine-grade bimini with full enclosure for sun and rain protection.",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=15",
    title: "Patio Awning",
    desc: "Custom sewn patio awning, durable and stylish, for a New Smyrna Beach home.",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=16",
    title: "Classic Car Seat Restoration",
    desc: "Vintage leather seats brought back to life for a local enthusiast.",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=17",
    title: "Custom Cushions & Pillows",
    desc: "Outdoor cushions and pet beds sewn for a family in Edgewater.",
  },
];

function OurWork() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Our Work Across Volusia County
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
        A showcase of our recent marine, auto, and sewing projects—from New Smyrna Beach to Daytona and beyond.
      </Typography>
      <Grid container spacing={4}>
        {galleryData.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card>
              {item.type === "image" ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={item.src}
                  alt={item.title}
                />
              ) : (
                <CardMedia
                  component="video"
                  height="200"
                  src={item.src}
                  controls
                  alt={item.title}
                />
              )}
              <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="body1" color="textSecondary">
          Have a project in mind? <strong>Contact us for a free quote—no job too big or small!</strong>
        </Typography>
      </Box>
    </Container>
  );
}

export default OurWork;