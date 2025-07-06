import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import DirectionsBoatIcon from "@mui/icons-material/DirectionsBoat";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import HomeIcon from "@mui/icons-material/Home";

// Use placeholder images and video for demonstration.
const galleryData = [
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=11",
    title: "Custom Boat Cover",
    desc: "Fitted marine canvas cover designed for a sport boat in Daytona Beach.",
    category: "Marine Canvas",
    location: "Daytona Beach",
    icon: <DirectionsBoatIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=12",
    title: "Pontoon Seat Restoration",
    desc: "Complete reupholstery and foam replacement for a family's pontoon boat.",
    category: "Boat Upholstery",
    location: "New Smyrna Beach",
    icon: <DirectionsBoatIcon />
  },
  {
    type: "video",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Convertible Top Installation",
    desc: "A time-lapse showcasing our seamless convertible top replacement on a classic car.",
    category: "Auto Upholstery",
    location: "Port Orange",
    icon: <LocalCarWashIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=13",
    title: "Auto Interior Refresh",
    desc: "Custom two-tone seats and new door panels for a client in Port Orange.",
    category: "Auto Upholstery",
    location: "Port Orange",
    icon: <LocalCarWashIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=14",
    title: "Bimini Top & Enclosure",
    desc: "Marine-grade bimini with full enclosure for sun and rain protection.",
    category: "Marine Canvas",
    location: "Edgewater",
    icon: <DirectionsBoatIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=15",
    title: "Patio Awning",
    desc: "Custom sewn patio awning, durable and stylish, for a New Smyrna Beach home.",
    category: "Custom Sewing",
    location: "New Smyrna Beach",
    icon: <HomeIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=16",
    title: "Classic Car Seat Restoration",
    desc: "Vintage leather seats brought back to life for a local enthusiast.",
    category: "Auto Upholstery",
    location: "Daytona Beach",
    icon: <LocalCarWashIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=17",
    title: "Custom Cushions & Pillows",
    desc: "Outdoor cushions and pet beds sewn for a family in Edgewater.",
    category: "Custom Sewing",
    location: "Edgewater",
    icon: <HomeIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=18",
    title: "Boat Enclosure System",
    desc: "Complete enclosure system with clear vinyl windows for year-round boating.",
    category: "Marine Canvas",
    location: "New Smyrna Beach",
    icon: <DirectionsBoatIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=19",
    title: "Truck Seat Repair",
    desc: "Professional repair and reupholstery of work truck seats.",
    category: "Auto Upholstery",
    location: "Daytona Beach",
    icon: <LocalCarWashIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=20",
    title: "Business Awning",
    desc: "Custom commercial awning for a local business in Port Orange.",
    category: "Custom Sewing",
    location: "Port Orange",
    icon: <HomeIcon />
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=21",
    title: "Marine Cushion Restoration",
    desc: "Complete restoration of weathered marine cushions with new foam and fabric.",
    category: "Boat Upholstery",
    location: "Edgewater",
    icon: <DirectionsBoatIcon />
  }
];

function OurWork() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 5 }}>
        <Typography variant="h3" color="primary" gutterBottom sx={{ fontWeight: 'bold' }}>
          Our Work Across Volusia County
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
          A showcase of our recent marine, auto, and sewing projects—from New Smyrna Beach to Daytona and beyond.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
          <Chip icon={<DirectionsBoatIcon />} label="Marine Canvas" color="primary" variant="outlined" />
          <Chip icon={<LocalCarWashIcon />} label="Auto Upholstery" color="secondary" variant="outlined" />
          <Chip icon={<HomeIcon />} label="Custom Sewing" color="default" variant="outlined" />
        </Stack>
      </Box>
      <Grid container spacing={4}>
        {galleryData.map((item, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: 4, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-6px)', boxShadow: 8 } }}>
              {item.type === "image" ? (
                <CardMedia
                  component="img"
                  height="200"
                  image={item.src}
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
              ) : (
                <CardMedia
                  component="video"
                  height="200"
                  src={item.src}
                  controls
                  alt={item.title}
                  sx={{ objectFit: 'cover' }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  {item.icon}
                  <Typography variant="subtitle2" color="primary" fontWeight="bold">
                    {item.category}
                  </Typography>
                  <Chip label={item.location} size="small" sx={{ ml: 'auto' }} />
                </Stack>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
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