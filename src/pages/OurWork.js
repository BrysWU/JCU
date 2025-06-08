import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

const galleryData = [
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=1",
    title: "Custom Boat Cover",
    desc: "High-quality fitted canvas cover for a speedboat.",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=1",
    title: "Marine Cushion Restoration",
    desc: "Reupholstered cushions for improved comfort and style.",
  },
  {
    type: "video",
    src: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    title: "Awning Installation",
    desc: "Time-lapse of commercial awning installation.",
  },
  {
    type: "image",
    src: "https://picsum.photos/400/300?random=1",
    title: "Bimini Top",
    desc: "Custom bimini top for sun protection.",
  },
];

function OurWork() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" color="primary" gutterBottom>
        Our Work
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
        A showcase of our recent projects in canvas and upholstery.
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
    </Container>
  );
}

export default OurWork;