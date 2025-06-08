import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const galleryImages = [
  {
    src: "https://picsum.photos/400/300?random=21",
    title: "Custom Boat Cover",
    desc: "Precision-fitted marine canvas cover.",
  },
  {
    src: "https://picsum.photos/400/300?random=22",
    title: "Convertible Top Replacement",
    desc: "Restoration of classic car convertible top.",
  },
  {
    src: "https://picsum.photos/400/300?random=23",
    title: "Bimini Top & Enclosure",
    desc: "Sun and rain protection for your boat.",
  },
  {
    src: "https://picsum.photos/400/300?random=24",
    title: "Patio Awning",
    desc: "Stylish shade for Volusia County homes.",
  },
  {
    src: "https://picsum.photos/400/300?random=25",
    title: "Pontoon Seat Refresh",
    desc: "Family boat seat foam and vinyl upgrade.",
  },
  {
    src: "https://picsum.photos/400/300?random=26",
    title: "Classic Car Seat Restoration",
    desc: "Vintage auto interiors brought back to life.",
  },
];

const ITEMS_VISIBLE = 3;
const INTERVAL = 3500;

function HomeGalleryCarousel() {
  const [startIdx, setStartIdx] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setStartIdx((prev) => (prev + ITEMS_VISIBLE) % galleryImages.length);
    }, INTERVAL);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handlePrev = () => {
    setStartIdx(
      (prev) =>
        (prev - ITEMS_VISIBLE + galleryImages.length) % galleryImages.length
    );
    resetInterval();
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + ITEMS_VISIBLE) % galleryImages.length);
    resetInterval();
  };

  const resetInterval = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setStartIdx((prev) => (prev + ITEMS_VISIBLE) % galleryImages.length);
    }, INTERVAL);
  };

  // Get the next 3 items, looping if needed.
  const displayed = [];
  for (let i = 0; i < ITEMS_VISIBLE; i++) {
    displayed.push(galleryImages[(startIdx + i) % galleryImages.length]);
  }

  return (
    <Box sx={{ position: "relative", width: "100%", my: 4 }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs="auto">
          <IconButton
            aria-label="Previous"
            onClick={handlePrev}
            sx={{ borderRadius: "50%" }}
            size="large"
          >
            <ArrowBackIosNewIcon />
          </IconButton>
        </Grid>
        {displayed.map((item, idx) => (
          <Grid item xs={12} sm={4} key={idx}>
            <Card sx={{ maxWidth: 330, mx: "auto" }}>
              <CardMedia
                component="img"
                height="170"
                image={item.src}
                alt={item.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="subtitle1">{item.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs="auto">
          <IconButton
            aria-label="Next"
            onClick={handleNext}
            sx={{ borderRadius: "50%" }}
            size="large"
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeGalleryCarousel;