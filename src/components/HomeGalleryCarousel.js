import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "nowrap",
          gap: { xs: 1, sm: 2 },
          width: "100%",
        }}
      >
        <IconButton
          aria-label="Previous"
          onClick={handlePrev}
          sx={{ borderRadius: "50%" }}
          size="large"
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        {displayed.map((item, idx) => (
          <Card
            key={idx}
            sx={{
              width: { xs: 110, sm: 220, md: 320 },
              height: { xs: 170, sm: 240, md: 320 },
              display: "flex",
              flexDirection: "column",
              mx: 1,
              flexShrink: 0,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              image={item.src}
              alt={item.title}
              sx={{
                width: "100%",
                height: { xs: 90, sm: 150, md: 200 },
                objectFit: "cover",
              }}
            />
            <CardContent sx={{ flexGrow: 1, p: 1, pb: '8px !important' }}>
              <Typography variant="subtitle1" sx={{ fontSize: { xs: 12, md: 16 } }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: 10, md: 14 } }}>
                {item.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
        <IconButton
          aria-label="Next"
          onClick={handleNext}
          sx={{ borderRadius: "50%" }}
          size="large"
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default HomeGalleryCarousel;