import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Container from "@mui/material/Container";

const testimonials = [
  {
    name: "Mike & Sarah Johnson",
    location: "New Smyrna Beach",
    rating: 5,
    text: "Justin did an amazing job on our pontoon boat seats. The quality is outstanding and he was so professional. Highly recommend!",
    service: "Boat Upholstery"
  },
  {
    name: "Robert Chen",
    location: "Daytona Beach",
    rating: 5,
    text: "Had my classic Mustang's convertible top replaced. Perfect fit and the workmanship is top-notch. Will definitely use again.",
    service: "Auto Upholstery"
  },
  {
    name: "Lisa Thompson",
    location: "Port Orange",
    rating: 5,
    text: "Justin made custom cushions for our patio furniture. They're beautiful and have held up perfectly through the Florida weather.",
    service: "Custom Sewing"
  },
  {
    name: "David & Maria Rodriguez",
    location: "Edgewater",
    rating: 5,
    text: "Mobile service was a game-changer! Justin came to our house, picked up our boat seats, and delivered them back perfect. Excellent service.",
    service: "Mobile Service"
  },
  {
    name: "Tom Wilson",
    location: "New Smyrna Beach",
    rating: 5,
    text: "Professional, reliable, and fair pricing. Justin restored our boat's bimini top and it looks brand new. Great work!",
    service: "Marine Canvas"
  },
  {
    name: "Jennifer Adams",
    location: "Daytona Beach",
    rating: 5,
    text: "Fast turnaround and excellent communication. Justin fixed our car's headliner and it looks perfect. Very satisfied customer!",
    service: "Auto Interior"
  }
];

function Testimonials() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4" color="primary" gutterBottom>
          What Our Customers Say
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mb: 3 }}>
          Real reviews from satisfied customers across Volusia County
        </Typography>
      </Box>
      
      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4
                }
              }}
            >
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Rating 
                    value={testimonial.rating} 
                    readOnly 
                    icon={<StarIcon sx={{ color: 'secondary.main' }} />}
                  />
                  <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                    {testimonial.rating}.0
                  </Typography>
                </Box>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3, 
                    flexGrow: 1,
                    fontStyle: 'italic',
                    lineHeight: 1.6
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                
                <Box sx={{ mt: 'auto' }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.location}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: 'primary.main',
                      fontWeight: 'bold',
                      textTransform: 'uppercase',
                      letterSpacing: 0.5
                    }}
                  >
                    {testimonial.service}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1" color="textSecondary">
          Join our growing list of satisfied customers! 
          <strong> Call or text (386) 555-1234 for your free quote today.</strong>
        </Typography>
      </Box>
    </Container>
  );
}

export default Testimonials; 